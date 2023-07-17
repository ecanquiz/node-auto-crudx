import dotenv from 'dotenv'

dotenv.config();

export const buildBackendRoutes = process.env.BUILD_BACKEND_ROUTES
export const buildFrontendRoutes = process.env.BUILD_FRONTEND_ROUTES
