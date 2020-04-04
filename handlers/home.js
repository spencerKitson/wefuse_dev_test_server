var log = require('../util/logger');

const { upperCaseFirst, generatePassword, charactersArray } = require('../util/functions/');

    const homeData = {
      title: "Home Page",
      url: "http://localhost:3000/",
      banner: {
          title: "This is a test Assessment",
          description: "Please make sure that you implement everything",
          image: {
              id: "6",
              kind: "image",
              url: "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
              data: {
                  width: "1600",
                  height: "1063"
              }
          }
        }
    };

exports.fetchHomedata = async function (req, res, next){
  console.log("start", homeData);
  try {
    // let foundBlogs = await db.Blog.findById({});
    return res.status(200).json({
      success: true,
      data: homeData
    });
  } catch (err) {
    log.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
};
