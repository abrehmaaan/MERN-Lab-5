const CV = require("../models/cvModel")
const insertCV = async(req, res)=>{
    const newCV = new CV({
        name: req.body.name,
        academicQualifications: {
          degree: req.body.academicQualificationsdegree,
          institution: req.body.academicQualificationsinstitution,
          fieldOfStudy: req.body.academicQualificationsfieldOfStudy,
          startYear: req.body.academicQualificationsstartYear,
          endYear: req.body.academicQualificationsendYear
        },
        professionalExperience: {
          jobTitle: req.body.professionalExperiencejobTitle,
          company: req.body.professionalExperiencecompany,
          startDate: req.body.professionalExperiencestartDate,
          endDate: req.body.professionalExperienceendDate,
          responsibilities: req.body.professionalExperienceresponsibilities
        },
        skills: req.body.skills,
        softwareProjectsUndertaken: {
          projectName: req.body.softwareProjectsUndertakenprojectName,
          description: req.body.softwareProjectsUndertakendescription,
          technologiesUsed: req.body.softwareProjectsUndertakentechnologiesUsed
        },
        spokenLanguages: {
          language: req.body.spokenLanguageslanguage,
          proficiency: req.body.spokenLanguagesproficiency
        },
        hobbies: req.body.hobbies,
        references: {
          name: req.body.referencesname,
          jobTitle: req.body.referencesjobTitle,
          company: req.body.referencescompany,
          contactDetails: req.body.referencescontactDetails
        }
      });
    
      newCV.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send('CV added successfully');
        }
      });
}

const findCVs = async(req, res) => {
    CV.find((error, cvs) => {
        if (error) {
          res.send(error);
        } else {
          res.render('cvs', { cvs: cvs });
        }
      });
};

const filterCVs = async(req, res) => {
  try {
    const { field, value } = req.body;
    let query = { [field]: value };
    if(field=="degree"){
      query = { 'academicQualifications.degree': value };
    }
    else if(field=="company"){
      query = { 'professionalExperience.company': value };
    }
    else if(field=="language"){
      query = { 'spokenLanguages.language': value };
    }
    else if(field=="hobby"){
      query = { 'hobbies': value };
    }
    const cvs = await CV.find(query);
    res.render('cvs', { cvs: cvs });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {insertCV, findCVs, filterCVs};
