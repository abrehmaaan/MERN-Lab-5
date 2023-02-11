const mongoose = require("mongoose")
const cv = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      academicQualifications: [{
        degree: {
          type: String,
          required: true
        },
        institution: {
          type: String,
          required: true
        },
        fieldOfStudy: {
          type: String,
          required: true
        },
        startYear: {
          type: Number,
          required: true
        },
        endYear: {
          type: Number,
          required: true
        }
      }],
      professionalExperience: [{
        jobTitle: {
          type: String,
          required: true
        },
        company: {
          type: String,
          required: true
        },
        startDate: {
          type: Date,
          required: true
        },
        endDate: {
          type: Date,
          required: true
        },
        responsibilities: {
          type: String,
          required: true
        }
      }],
      skills: [{
        type: String,
        required: true
      }],
      softwareProjectsUndertaken: [{
        projectName: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        technologiesUsed: [{
          type: String,
          required: true
        }]
      }],
      spokenLanguages: [{
        language: {
          type: String,
          required: true
        },
        proficiency: {
          type: String,
          required: true
        }
      }],
      hobbies: [{
        type: String,
        required: true
      }],
      references: [{
        name: {
          type: String,
          required: true
        },
        jobTitle: {
          type: String,
          required: true
        },
        company: {
          type: String,
          required: true
        },
        contactDetails: {
          type: String,
          required: true
        }
      }]
})

const CV = mongoose.model("CV", cv);
module.exports = CV;