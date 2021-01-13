var app = new Vue ({

  el: '#root',

  data: {
    yyyy: new Date().getFullYear(),
    leftNavBarLinks: [
      {
        name: "Home",
        link: "#"
      },
      {
        name: "Pages",
        link: "pages.html"
      },
      {
        name: "Courses",
        link: "courses.html"
      },
      {
        name: "Features",
        link: "blog.html"
      },
      {
        name: "Blog",
        link: "blog.html"
      },
      {
        name: "Shop",
        link: "shop.html"
      }
    ],
    accountLink: "account.html",
    brandInfos: {
      brandAddress: "382 NE 191st St # 87394 Miami, FL 33179-3899",
      phoneAndDays: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
      emailAddress: "support@maxcoach.com",
    },
    exploreLinks: [
      {
        name: "Start here",
        link: "starhere.html"
      },
      {
        name: "Blog",
        link: "blog.html",
      },
      {
        name: "About us",
        link: "aboutus.html",
      },
      {
        name: "Success story",
        link: "successstory.html",
      },
      {
        name: "Courses",
        link: "courses.html",
      },
      {
        name: "Contact us",
        link: "contactus.html",
      }
    ],
    infoLinks: [
      {
        name: "Membership",
        link: "membership.html"
      },
      {
        name: "Purchase guide",
        link: "purchaseguide.html",
      },
      {
        name: "Privacy policy",
        link: "privacypolicy.html",
      },
      {
        name: "Terms of service",
        link: "termsofservice.html",
      }
    ],
    socialLinks: [
      {
        social: "facebook",
        link: "fb.html",
        icon: "fab fa-facebook-square"
      },
      {
        social: "twitter",
        link: "twitter.html",
        icon: "fab fa-twitter"
      },
      {
        social: "instagram",
        link: "instagram.html",
        icon: "fab fa-instagram"
      },
      {
        social: "linkedin",
        link: "linkedin.html",
        icon: "fab fa-linkedin"
      }
    ]
  }

})
