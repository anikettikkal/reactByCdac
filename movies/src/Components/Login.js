import React from 'react'

export default function Login() {
  return (
    <>
      <div class="container">
        <div
        >
          <h3 class="text-center mb-4">Login</h3>

          <form>

            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                required
              />
            </div>


            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                required
              />
            </div>


            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label">Remember me</label>
            </div>


            <button type="submit" class="btn btn-primary w-100">
              Login
            </button>
          </form>

          <p class="text-center mt-3">
            Don't have an account? <a href="#">Signup</a>
          </p>
        </div>
      </div>
    </>
  )
}
