import { UserManager } from 'oidc-client-ts';

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_sU3OO1y5d",
    client_id: "78kf4olfs1b43inr005rvnv2bi",
    redirect_uri: "http://localhost:5173/callback",
    response_type: "code",
    scope: "email openid phone",


};



// create a UserManager instance
export const userManager = new UserManager ({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
const clientId = "78kf4olfs1b43inr005rvnv2bi";
const logoutUri = "http://localhost:5173/";
const cognitoDomain = "https://us-east-1sU3OO1y5d.auth.us-east-1.amazoncognito.com";
window. location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
