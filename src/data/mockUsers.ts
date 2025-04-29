import { User } from "../types";

export const mockUsers: User[] = [
    {
        id: "john-doe",
        name: "John Doe",
        initials: "JD",
        role: "Retail Manager",
        avatarColor: "#1976d2" // primary.main
    },
    {
        id: "jane-smith",
        name: "Jane Smith",
        initials: "JS",
        role: "Regional Director",
        avatarColor: "#9c27b0" // secondary.main
    },
    {
        id: "robert-johnson",
        name: "Robert Johnson",
        initials: "RJ",
        role: "Food & Beverage Lead",
        avatarColor: "#2e7d32" // success.main
    },
    {
        id: "sarah-kim",
        name: "Sarah Kim",
        initials: "SK",
        role: "Global Operations",
        avatarColor: "#0288d1" // info.main
    },
    {
        id: "michael-patel",
        name: "Michael Patel",
        initials: "MP",
        role: "Hospitality Director",
        avatarColor: "#ed6c02" // warning.main
    }
];
