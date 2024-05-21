const express = require("express");
const mongoose = require("mongoose");

const regmodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    unique:true,
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
    maxlength: 60,
  },

  roles:{
    type:String,
    required:true,
    trim:true,
    enum:["admin","user"]
  },
});

const userRegistration = new mongoose.model("userRegistration",regmodel);

module.exports = userRegistration;
