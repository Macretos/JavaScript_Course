let userRole = "admin";
let accessLevel

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let person = "Enrolled Member"
switch(person){
    case "Employee":
        typePerson = "Employee";
        console.log("You are an ", typePerson, "with access to Dietary Services");
        break;
    case "Enrolled Member":
        typePerson = "Enrolled Member";
        console.log("You are an ", typePerson, "with access to Dietary Services & one-on-one interaction");
        break;
    case "Suscriber":
        typePerson = "Suscriber";
        console.log("You are an ", typePerson, "with partial access to Dietary Services");
        break;
    case "Non-Suscriber":
        typePerson = "Non-Suscriber";
        console.log("You are an ", typePerson, "so you need to enroll or at least subscribe first to avail this facility");
}