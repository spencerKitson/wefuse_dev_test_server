var log = require('../util/logger');

const { upperCaseFirst, generatePassword, charactersArray } = require('../util/functions/');

    const blogPosts = [
        {
            title: "Test Article 1",
            url: "http://localhost:3000/blog/test-article-1",
            slug: "test-article-1",
            banner: {
                title: "Test Article 1",
                excerpt: "This is a Test Article",
                image: {
                    id: "14",
                    kind: "image",
                    url: "https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                    data: {
                        width: "1788",
                        height: "1118"
                    }
                }
            },
            postDate: {
                date: "2020-03-24 06:43:08.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            author: "Admin",
            category: "Tech"
        },
        {
            title: "Test Article 2",
            url: "http://localhost:3000/blog/test-article-2",
            slug: "test-article-2",
            banner: {
                title: "Test Article 2",
                excerpt: "This is a Test Article",
                image: {
                    id: "6",
                    kind: "image",
                    url: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                    data: {
                        width: "1600",
                        height: "1063"
                    }
                }
            },
            postDate: {
                date: "2020-03-24 06:43:33.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            author: "Admin",
            category: "Un Categorized"
        },
        {
            title: "Test Article 3",
            url: "http://localhost:3000/blog/test-article-3",
            slug: "test-article-3",
            banner: {
                title: "Test Article 3",
                excerpt: "This is a Test Article",
                image: {
                    id: "14",
                    kind: "image",
                    url: "https://images.pexels.com/photos/3696399/pexels-photo-3696399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                    lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                    data: {
                        width: "1788",
                        height: "1118"
                    }
                }
            },
            postDate: {
                date: "2020-03-24 06:43:23.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            author: "Admin",
            category: "Tech"
        },
        {
            title: "Test Article 4",
            url: "http://localhost:3000/blog/test-article-4",
            slug: "test-article-4",
            banner: {
                title: "Test Article 4",
                excerpt: "This is a Test Article",
                image: {
                    id: "28",
                    kind: "image",
                    url: "https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                    data: {
                        width: "1750",
                        height: "1142"
                    }
                }
            },
            postDate: {
                date: "2020-03-24 06:43:23.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            author: "Admin",
            category: "Media"
        },
        {
            title: "Test Article 5",
            url: "http://localhost:3000/blog/test-article-5",
            slug: "test-article-5",
            banner: {
                title: "Test Article 5",
                excerpt: "This is a Test Article",
                image: {
                    id: "31",
                    kind: "image",
                    url: "https://images.pexels.com/photos/3559105/pexels-photo-3559105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                    data: {
                        width: "1730",
                        height: "1155"
                    }
                }
            },
            postDate: {
                date: "2020-03-24 06:43:18.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            author: "Admin",
            category: "Un Categorized"
        }
    ];

    const listMeta = {
        pagination: {
            total: 5,
            count: 5,
            per_page: 100,
            current_page: 1,
            total_pages: 1,
            links: {}
        }
    }

    const individualMeta =  {
        pagination: {
            total: 1,
            count: 1,
            per_page: 100,
            current_page: 1,
            total_pages: 1,
            links: {}
        }
    }

    const fullBlogPosts = [
        {
          data: {
             slug: "test-article-1",
             url: "http://localhost:3000/blog/test-article-1",
             banner: {
                 title: "Test Article 1",
                 description: "This is a Test Article",
                 image: {
                     id: "14",
                     kind: "image",
                     url: "https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                     lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                     data: {
                         width: "1788",
                         height: "1118"
                     }
                 }
             },
             pageData: "<h2>What is Tech?</h2>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><ol><li>Item 1</li><li>Item 2 </li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ol><pre>We are checking a lot of different Styles</pre>",
             postDate: {
                 date: "2020-03-24 06:43:08.000000",
                 timezone_type: 3,
                 timezone: "UTC"
             },
             author: "Admin",
             category: "Tech"
            }
       },
        {
              data: {
                      slug: "test-article-2",
                      url: "http://localhost:3000/blog/test-article-2",
                      banner: {
                          title: "Test Article 2",
                          description: "This is a Test Article",
                          image: {
                              id: "6",
                              kind: "image",
                              url: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                              lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                              data: {
                                  width: "1600",
                                  height: "1063"
                              }
                          }
                      },
                      pageData: "<h2>What is Tech?</h2>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /></p>\r\n",
                      postDate: {
                          date: "2020-03-24 06:43:33.000000",
                          timezone_type: 3,
                          timezone: "UTC"
                      },
                      author: "Admin",
                      category: "Un Categorized"
                  }
            },
          {
            data: {
                    slug: "test-article-3",
                    url: "http://localhost:3000/blog/test-article-3",
                    banner: {
                        title: "Test Article 3",
                        description: "This is a Test Article",
                        image: {
                            id: "14",
                            kind: "image",
                            url: "https://images.pexels.com/photos/3696399/pexels-photo-3696399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                            lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                            data: {
                                width: "1788",
                                height: "1118"
                            }
                        }
                    },
                    pageData: "<h2>What is Tech?</h2>\r\n<ol><li>Item 1</li><li>Item 2 </li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ol>\r\n<pre>We are checking a lot of different Styles\r\n</pre>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
                    postDate: {
                        date: "2020-03-24 06:43:23.000000",
                        timezone_type: 3,
                        timezone: "UTC"
                    },
                    author: "Admin",
                    category: "Tech"
                }
          },
        {
              data: {
                      slug: "test-article-4",
                      url: "http://localhost:3000/blog/test-article-4",
                      banner: {
                          title: "Test Article 4",
                          description: "This is a Test Article",
                          image: {
                              id: "28",
                              kind: "image",
                              url: "https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                              lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                              data: {
                                  width: "1750",
                                  height: "1142"
                              }
                          }
                      },
                      pageData: "<h2>What is Tech?</h2>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /></p>\r\n\r\n<pre>We are checking a lot of different Styles</pre>",
                      postDate: {
                          date: "2020-03-24 06:43:23.000000",
                          timezone_type: 3,
                          timezone: "UTC"
                      },
                      author: "Admin",
                      category: "Media"
                  }
            },
        {
              data: {
                      slug: "test-article-5",
                      url: "http://localhost:3000/blog/test-article-5",
                      banner: {
                          title: "Test Article 5",
                          description: "This is a Test Article",
                          image: {
                              id: "31",
                              kind: "image",
                              url: "https://images.pexels.com/photos/3559105/pexels-photo-3559105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                              lazyLoad: "http://localhost:3000/index.php?p=actions/not-found",
                              data: {
                                  width: "1730",
                                  height: "1155"
                              }
                          }
                      },
                      pageData: "<h2>This is a huge article?</h2>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n<ol><li>Item 1</li><li>Item 2 </li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ol>\r\n<pre>We are checking a lot of different Styles</pre>\r\n<h2>Where does it come from?</h2>\r\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p>\r\n<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><h2>Why do we use it?</h2>\r\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><h2>Where can I get some?</h2>\r\n<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><h3>The standard Lorem Ipsum passage, used since the 1500s</h3>\r\n<p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p><h3>1914 translation by H. Rackham</h3>\r\n<p>\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"</p>",
                      postDate: {
                          date: "2020-03-24 06:43:18.000000",
                          timezone_type: 3,
                          timezone: "UTC"
                      },
                      author: "Admin",
                      category: "Un Categorized"
                  }
            }
    ];


exports.fetchBlogs = async function (req, res, next){
  try {
    // let foundBlogs = await db.Blog.findById({});
    return res.status(200).json({
      success: true,
      count: blogPosts.length,
      data: blogPosts,
      listMeta
    });
  } catch (err) {
    log.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
};


exports.fetchBlog = async function (req, res, next){
  try {
    let slug = req.params.slug;
    await fullBlogPosts.forEach((post, i) => {
      if(post.data.slug === slug){
        return res.status(200).json({
          success: true,
          data: post.data,
          individualMeta
        });
      }
    });

  } catch (err) {
    log.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
};
