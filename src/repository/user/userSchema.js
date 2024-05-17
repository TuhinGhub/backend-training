const express = require("express");
const mongoose = require("mongoose");

const regmodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(value);
      },
      message: "invalid email address",
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, "must be at least 6 characters long, got {VALUE}"],
    maxlength: 20,
  },
});

const userRegistration = new mongoose.model("userRegistration",regmodel);

module.exports = userRegistration;
