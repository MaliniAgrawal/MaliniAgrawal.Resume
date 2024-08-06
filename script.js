document.addEventListener('DOMContentLoaded', function() {
      // Certifications
      const certifications = [
          { name: "AWS Certified Developer – Associate", date: "Jan 10, 2023", reg: "439180871" },
          { name: "AWS Certified Solutions Architect – Associate", date: "May 17, 2022", reg: "420978275" },
          { name: "AWS Certified Cloud Practitioner", date: "Oct 29, 2021", reg: "408396905" }
      ];
  
      const certList = document.getElementById('cert-list');
      certifications.forEach(cert => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${cert.name}</strong><br>${cert.date} | Registration number: ${cert.reg}`;
          certList.appendChild(li);
      });
  
      // AWS Skills
      const awsSkills = [
          "Compute: EC2, Lambda",
          "Storage: S3, EBS, Glacier",
          "Database: DynamoDB, SQL",
          "Networking: VPC, Route 53",
          "API Gateway: API testing with Postman",
          "Security: IAM, Security Groups, Key Management Service (KMS)",
          "Operating Systems and Applications: Linux, Windows WSL (Ubuntu)",
          "Understanding of application architectures and troubleshooting"
      ];
  
      const awsSkillsList = document.getElementById('aws-skills');
      awsSkills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          awsSkillsList.appendChild(li);
      });
  
      // Soft Skills
      const softSkills = [
          "Excellent communication and interpersonal skills",
          "Ability to work effectively in a team environment",
          "Strong customer service orientation"
      ];
  
      const softSkillsList = document.getElementById('soft-skills-list');
      softSkills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          softSkillsList.appendChild(li);
      });
  
      // Projects
      const projects = [
          "Shelf lining calculator website that stores dimensions with every click using S3, Lambda, and DynamoDB",
          "Thumbnail creation with Lambda and S3",
          "Build and Deploy API with a Serverless CI/CD",
          "Building Generative AI Application Using Amazon Bedrock"
      ];
  
      const projectList = document.getElementById('project-list');
      projects.forEach(project => {
          const li = document.createElement('li');
          li.textContent = project;
          projectList.appendChild(li);
      });
  
      // Education
      const education = [
          { degree: "Master of Commerce (Business Management Emphasis)", school: "DEVI AHILYA UNIVERSITY, INDIA", year: "June/July 1998" },
          { degree: "Bachelor of Commerce (Business Administration Emphasis)", school: "DEVI AHILYA UNIVERSITY, INDIA", year: "June/July 1996" },
          { degree: "Women Polytechnic Computer Science Diploma (One Year)", school: "", year: "" }
      ];
  
      const educationList = document.getElementById('education-list');
      education.forEach(edu => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${edu.degree}</strong><br>${edu.school} ${edu.year}`;
          educationList.appendChild(li);
      });
  });