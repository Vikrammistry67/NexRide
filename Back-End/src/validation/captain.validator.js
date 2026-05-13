import { body, validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors: errors.array(),
        });
    }

    next();
};


export const captainRegisterValidation = [

    body("fullName.firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .isLength({ min: 3 })
        .withMessage("First name must be at least 3 characters"),

    body("fullName.lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .isLength({ min: 3 })
        .withMessage("Last name must be at least 3 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    body("vehicle.color")
        .trim()
        .notEmpty()
        .withMessage("Vehicle color is required")
        .isLength({ min: 3 })
        .withMessage("Color must be at least 3 characters"),

    body("vehicle.numberPlate")
        .trim()
        .notEmpty()
        .withMessage("Vehicle number plate is required")
        .isLength({ min: 4 })
        .withMessage("Invalid vehicle number plate"),

    body("vehicle.capacity")
        .notEmpty()
        .withMessage("Vehicle capacity is required")
        .isInt({ min: 1, max: 5 })
        .withMessage("Capacity must be between 1 and 5"),

    body("vehicle.vehicleType")
        .notEmpty()
        .withMessage("Vehicle type is required")
        .isIn(["bike", "car", "auto"])
        .withMessage("Vehicle type must be bike, car, or auto"),
    validateRequest

];

export const captainLoginValidation = [

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
    validateRequest

];