import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import useAuth from "../hooks/useAuth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const { login, signup, user, loading } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      if (isSignup) {
        await signup(formData);
      } else {
        await login({
          email: formData.email,
          password: formData.password,
        });
      }

      setFormData(initialState);
      navigate("/favorites");
    } catch (error) {
      setFormError(error.message || "Authentication failed.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <PageWrapper title="Login" subtitle="Checking your session...">
        <div className="login-shell glass-panel">
          <p className="form-note">Loading authentication state...</p>
        </div>
      </PageWrapper>
    );
  }

  if (user) {
    return (
      <PageWrapper title="Welcome back" subtitle="Your account is active.">
        <div className="login-shell glass-panel">
          <p className="form-note">Signed in as {user.email}</p>
          <button
            className="primary-btn login-btn"
            onClick={() => navigate("/favorites")}
          >
            Go to Favorites
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper
      title={isSignup ? "Create Account" : "Login"}
      subtitle={
        isSignup
          ? "Build your creative world and manage your palette collection."
          : "Dive back into your saved shades and bring your creative world to life"
      }
    >
      <div className="login-shell glass-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          {isSignup ? (
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
          ) : null}

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              minLength={6}
              required
            />
          </label>

          {formError ? <p className="form-error">{formError}</p> : null}

          <button
            type="submit"
            className="primary-btn login-btn"
            disabled={submitting}
          >
            {submitting
              ? "Please wait..."
              : isSignup
                ? "Create Account"
                : "Sign In"}
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => {
              setIsSignup((prev) => !prev);
              setFormError("");
            }}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Need an account? Sign up"}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
