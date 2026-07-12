// Get the backend URL from environment variable or construct dynamically
const getBackendURL = () => {
  // Check if REACT_APP_BACKEND_URL is set in environment
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL;
  }

  // If in browser environment
  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;
    
    // If running on localhost, use localhost:5000
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return `${protocol}//localhost:5000`;
    }
    
    // For GitHub Codespaces and similar environments
    // Replace port 3000 with 5000 in the hostname
    if (hostname.includes("-3000.")) {
      const backendHostname = hostname.replace("-3000.", "-5000.");
      return `${protocol}//${backendHostname}`;
    }
    
    // Generic fallback: try replacing port in URL if it exists
    if (port === "3000") {
      return `${protocol}//${hostname}:5000`;
    }
    
    // Last resort fallback
    return `${protocol}//${hostname}:5000`;
  }

  return "http://localhost:5000";
};

export const host = getBackendURL();
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
