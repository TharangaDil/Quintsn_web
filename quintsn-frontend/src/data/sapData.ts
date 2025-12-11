export const sapData = {
  "sap-business": {
    title: "Application Development",
    heroComponent: "DevelopmentHero",
    topic:"What is SAP Business One?",
    desc:"A single, affordable ERP solution to manage your entire small business – from accounting and financials, purchasing, inventory, sales and customer relationships to reporting and analytics.",
    sections: [
      {
        title: " Cloud-Native Application Development",
        text: ` Our expert team of developers creates custom cloud-native applications tailored to your business needs. 
                  By leveraging microservices architecture, containers, and serverless computing, we design applications that are
                  highly scalable, fault-tolerant, and easily maintainable. This approach ensures optimal resource utilization and 
                  rapid deployment, facilitating quicker time-to-market for your products and services.`,
        image: "/img/cloudcomp.jpg",
        imageSide: "right"
      },
      {
        title: "Legacy Application Migration",
        text: `Modernize your legacy applications by migrating them to the cloud. We carefully assess your existing systems, 
                  plan migration strategies, and execute seamless transitions to cloud platforms. This process not only enhances 
                  the performance and reliability of your applications but also reduces operational overhead and infrastructure 
                  costs.`,
        image: "/img/appmigration.jpg",
        imageSide: "left"
      },
      {
        title: "Continuous Monitoring & Support",
        text: `The cloud landscape evolves, and we’re here to ensure your applications do too. Our services include 
                  continuous monitoring, performance analysis, and regular updates to keep your applications running smoothly 
                  and securely. Our dedicated support team is available to address any issues and provide timely assistance.`,
        image: "/img/monitoring.jpg",
        imageSide: "right"
      }
    ]
  },

  business: {
    title: "Business Consultancy",
    heroComponent: "ConsultancyHero",
    sections: [
      {
        title: "We Are At Your Service",
        text: [`Our team of consultants are highly experienced and certified in various ERP systems, including SAP, Oracle, 
                    Microsoft Dynamics and SAGE. We keep up-to-date with the latest trends and technologies in the industry, and 
                    we use this knowledge to help our clients stay ahead of the curve.  `,
                    
                    "We believe in providing exceptional customer service and maintaining long-term relationships with our clients.Our goal is to help you succeed by maximizing the potential of your Applications/ERP system. ",

                    "Contact us today to learn more about our services and how we can help your business achieve its goals with a powerful and efficient application/ERP system."],
        image: "/img/services.jpg",
        imageSide: "right"
      }
    ]
  },

  "app-maintenance": {
    title: "Application Maintenance",
    heroComponent: "AppHero",
    sections: [
      {
        title: "Application Implementation",
        text: `Our consultants will guide you through the entire implementation process, from planning to deployment. 
                We work with you to ensure that your ERP system/application is tailored to your business needs and is 
                integrated with your existing systems as required.`,
        image: "/img/appmaintain.jpg",
        imageSide: "right"
      },
      {
        title: "Application Optimization",
        text: `We help you get the most out of your ERP system by identifying areas for improvement and implementing 
                solutions to increase efficiency and productivity.`,
        image: "/img/optimizationimg.jpg",
        imageSide: "left"
      },
       {
        title: " Support",
        text: `Our team provides ongoing support and maintenance for your ERP system to ensure it continues to 
                operate smoothly and effectively.`,
        image: "/img/support.jpg",
        imageSide: "right"
      },
      {
        title: " Training",
        text: `We offer training sessions for your employees to help them learn how to use the ERP system efficiently and effectively..`,
        image: "/img/training.jpg",
        imageSide: "left"
      },
    ]
  }
};

export type ServiceId = keyof typeof sapData;
export type ServiceData = (typeof sapData)[ServiceId];
