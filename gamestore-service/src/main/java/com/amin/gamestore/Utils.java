package com.amin.gamestore;

public class Utils {
    // Function to remove non-alphabetic characters
    static String removeNonAlphabetic(String str) {

        // Use regular expression to match all non-alphabetic characters and replace with empty string
        String result = str.replaceAll("[^a-zA-Z0-9]", "");

        return result; // Return the resulting string
    }
}
