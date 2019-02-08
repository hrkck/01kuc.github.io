module.exports = [{"markdown":"##Sample Markdown\n\nThis is some basic, sample markdown.\n\nSome fundemental markdown features are working. Some don't. I will fix them later by using RegEx functions.\n\n###Issues\n\nOrdered lists, blockquotes and some other features are not working. Because during the converting process of this markdown post to hyperscript, whitespaces that surround special markdown syntax (such as bold chars \\*text\\*) [dissappear](https://stackoverflow.com/questions/15721373/how-do-i-ensure-that-whitespace-is-preserved-in-markdown). This results in bold, italic text, or links that are sticked to the words before and after them. \n\nAs a workaround, before converting this markdown, I replace all white space with `&nbsp;` characters. \n\nHowever, since I am using bootstrap to add some simple styling to the page, long text in a narrow page does not get wrapped up and it goes on horizontally. Why does CSS fails to wrap the words correctly? Because there are no more white spaces! A CSS attribute such as `word-wrap:break-all` works fine, but it breaks in the middle of the word, which is not good.\n\nThis is why after converting the markdown to hyperscript, I replace the `&nbsp;` characters back to good old white spaces. Apparently, this is breaking some of the markdown's native features... \n\nAnd also, the white spaces between this ```<`>``` special quotation chars are rendered as ` ` (I literally placed a white space in between these [grave accents](https://en.wikipedia.org/wiki/Grave_accent) to render it)\n\nヾ( ￣O￣)ツ\n\nOkay... Here are some styles that are _not_ **broken**... A link [to duckduckgo](https://duckduckgo.com)\n\n* Most of the problems are fixed by regex.\n* And the rest will be fixed by regex\n* too...\n\nA render from [blender.org](https://archive.blender.org)'s archive...\n\nCode blocks, mathematical expressions and plotting functional graphs are classified as `special-functions`. So they are discussed in other posts. Search `features` tag to see all posts related to the content types of this website.\n\n![Calibri](https://archive.blender.org/typo3temp/pics/bee472a01f.jpg)\n\nThe end ...\n","title":"Markdown Rendering","tags":"markdown_rendering,features","url":"markdown_rendering","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"I am using [KaTeX](https://katex.org/) to render my mathematical functions.\n\n<<< hyperscript(`m('p',\t\n\t\t'an inline math expression, ', \n\t\tmath('x = oo'), \n\t\t' more inline text ', \n\t\t)`) >>> \n \nand a block math...\n\n<<< math(`sum_(i=1)^(n)i^3 = ((n(n+1))/2)^2`) >>> \\n\n\nand markdown continues here.\n","title":"KaTeX Example","tags":"katex,math,features","url":"katex_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"Here is a function plotted using some javascript and HTML canvas tags. \n\n<<< graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7') >>>\n\nThe syntax to render it is simple:\n\n<<< code(`block`, `graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7')`) >>>\n\nMy aim in writing this little feature is to be able to plot functional graphs as fast as you would draw them by hand on paper. Still got lots to do...\n\nI took the starter code from [this javascripter.net post](http://www.javascripter.net/faq/plotafunctiongraph.htm)","title":"Plotting a function","tags":"plot_function_example,features","url":"plot_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"To highlight code, I use [microlight](http://asvd.github.io/microlight/), Galaxy's simplest code highlighter.\n\n<<< code(`function readFile(file){\n  let isFileRead = false\n  let md_file = ''\n  while(!isFileRead){ // I don't know why, \\`on change\\` the file is not always read the first time...\n    md_file = fs.readFileSync(file, 'utf8')\n    if(md_file == ''){\n      console.log(\" ----------FILE NOT READ----------- \")\n      continue\n    }else{\n      console.log(' +++++++FILE READ+++++++++ ')\n      isFileRead = true\n    }\n  }\n  return md_file\n}\n`) >>>\n\nRendering an inline code is also quite straight forward, `(e)=>{console.log(e.target.value)}` will do it...\n\nThe end. Puummm.\n\nIf you have read it so far, you are a weird person. [Here are](https://media.giphy.com/media/9jDrxxBuV3TDW/giphy.gif) some potatos for you.\n\n","title":"Code highlighting","tags":"code_highlighting,microlight,features","url":"microlight_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"It is always good to keep a collection of bookmarks in a safe place.\n\nThis post can be used as a note taking place to keep a memory on the good resources about Blender 3D.\n\n- An archived list of &nbsp; [blender user communities](https://archive.blender.org/community/user-community/index.html). This list may be outdated but most of the forums are still active today.\n- [API Blender 2.64](https://docs.blender.org/api/blender_python_api_2_64_release/). It may seem to be not relevant anymore, but it includes important timeless practices.\n- [API Blender 2.59](https://docs.blender.org/api/blender_python_api_2_59_release/)\n- [API Blender 2.49](https://archive.blender.org/documentation/249PythonDoc.html)\n- [API Blender 2.79](https://docs.blender.org/api/2.79b/)\n- [Blender 2.6 Code Documentation](https://en.blender.org/index.php/Dev:Source/Architecture)\n- [Current Code Documentation (2.8)](https://wiki.blender.org/wiki/Main_Page)\n- [Blender SVN](https://svn.blender.org/svnroot/bf-blender/)\n- [Blender Demo Page.](https://download.blender.org/demo/). An interesting place.\n- [Blender.org tutorials page (archive)](https://archive.blender.org/education-help/tutorials/index.html)\n- [Official Blender YoutubeChannel](https://www.youtube.com/user/BlenderFoundation)\n- [Modern Blender Docs](https://docs.blender.org/)\n- [Blender 2.6 Docs](https://en.blender.org/index.php/Doc:2.6/Tutorials), this page is one of the inconsumable and invaluable source of information.\n- [Blender 2.6 Manuals](https://en.blender.org/index.php/Doc:2.6/Manual)\n- [A parent page for the above two links](https://en.blender.org/index.php/Doc:2.6)\n- [Blender noob to pro](https://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro), lets admit, after using blender for 8 years, I am still a noob. Lets check that book out finally for gods' sake!\n- [Blender nation's tuts section](https://www.blendernation.com/category/education/tutorials/)\n- Some [nostalgic page](http://wiki.c2.com/?BlenderWiki) about blender \n- [reddit's blender wiki page](https://www.reddit.com/r/blender/wiki/index). This is a similar place to this page.\n- [a nice blender sculpting related youtube channel](https://www.youtube.com/channel/UCfjswDVU0XHyBN7UFG0Mi5Q)\n- [Armory 3D, Blender Game Engine](https://armory3d.org/)\n\n- [some misc content](http://www.cdschools.org/Page/455) -> check that website out but there is not much time to waste\n- [bio blender](http://www.bioblender.org/), molecular viz in blender.\n- [making clouds in blender](https://blenderartists.org/t/procedural-cloudscape-generation-in-cycles-now-eevee/694700)\n- [BlenderHD.com](https://www.blenderhd.com/tutorials/)\n- [CreativeSchrimp](https://www.creativeshrimp.com/tutorials)\n- [BlenderTuts](https://www.blendtuts.com/)\n- [A fun place to practice Blender](http://www.littlewebhut.com/blender/)\n- [Animation related tutorials](https://conceptartempire.com/blender-animation-tutorials/)\n- [Zacharias's](https://zachariasreinhardt.com/)\n- [CG meetup blender tutorials](http://www.cgmeetup.net/home/tutorials/blender/)\n- [borncg youtube channel](https://www.youtube.com/channel/UCdioEctcBLd2nw2aQkl8msw)\n- [katbits](https://www.katsbits.com/tutorials/)\n- [blender geo map creaing](https://somethingaboutmaps.wordpress.com/blender-relief-tutorial-the-plane/)\n","title":"Links About Blender 3D","tags":"blender3d,archive,links","url":"blender3d_archive","baseUrl":"blender3d","date":"2019-01-31"},{"markdown":"- [http://lhorie.github.io/mithril-blog/building-a-seinfeld-app.html](http://lhorie.github.io/mithril-blog/building-a-seinfeld-app.html)\n- [https://mithril.js.org/change-log.html#component-controller-function](https://mithril.js.org/change-log.html#component-controller-function)\n- [why-i-hate-your-single-page-app](https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134)\n- [https://roca-style.org/](https://roca-style.org/)","title":"Current Reading List on Mithril","tags":"current,reading_list,mithril","url":"current_reading_list_on_mithril","date":"2019-02-01"},{"markdown":"\n\nImplemented ideas are written with a gray color.\n\n<<< html(`<ul style=\"color: gray;\">\n\n<li>  when writing a post, the header section items must be seperate input fields, allowing to switch them by 'tab' key... </li>\n\n<li>  when writing a post, there should be a button for each special function to be able to include them quickly. When the button will be pressed, corresponding special function will be added to the end of the post writing box. And so I can easily fill the content of the special function without focusing on getting the syntax right. </li>\n\n<li> Regex selection for special functions are currently include esc and end keyword. Replace them with something better like double curly brackets. </li>\n\n<li> Graph functions should support hot reload </li>\n\n<li> List of tags should dissappear when user enter an input, thus limiting the possible options of tags.</li>\n\n\n</ul>`) >>>\n\n\n- related to styling, it seems to be more reasonable to use [semantic-ui](https://semantic-ui.com/) rather than bootstrap.\n\n- Some simple markdown syntax are still not working. Indentify and fix them\n\n- Graphing functions needs improvements...\n- inline rendering for code snippets and math expression are not working. Fix them. \n- HTML white space entity is persisting when there is a white space between grave marks...\n\n- general code refactoring, documenting and simplifying go without saying...\n","title":"Ideas of improvement on this blog","tags":"this_blog,todos","url":"ideas_of_improvements_on_this_blog","date":"2019-02-01"},{"markdown":"- [single-page-application-vs-multiple-page-application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)\n- [the-disadvantages-of-single-page-applications](https://adamsilver.io/articles/the-disadvantages-of-single-page-applications/)\n- [why-i-hate-your-single-page-app](https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134)\n- [https://roca-style.org/](https://roca-style.org/)\n- [single page app book](http://singlepageappbook.com/index.html)","title":"Reading list on SPAs","tags":"reading_list,SPAs","url":"reading_list_on_spas","date":"2019-02-01"},{"markdown":"here is an idea that struck to Niko on an evening of January… :\n\n<<< hyperscript(`m('img.tommy-niko-jasmin-hakki', {\n                      src: 'content/media/tommy-niko-jasmin-hakki.png', \n                      alt: 'tommy-niko-jasmin-hakki',\n                      //https://stackoverflow.com/a/51817813/6025059\n                      oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!\n                        let inception = new Date('January 17, 2019 22:10:00');\n                        let now = new Date();\n                        let deg = (360/365) * Math.floor((now-inception)/(1000\\*60\\*60*24)); // convert miliseconds to degrees\n                        vnode.dom.setAttribute(\"style\", \"transform: rotate(\" + deg + \"deg)\");\n                      }\n                    })    \n`) >>>\n\n\nThis picture will rotate clock-wise by .986 degree a day. For instance, in 365 days, it will appear without any orientation. As the picture rotates, each person will tell a date. Therefore, since the picture is taken on 17 January, Tommy corresponds to Winter, I to Spring, Jasmin to Summer and Niko to Autumn.\n\nA simple `new_Date()` output controls rotation of the image and that does the js trick.\n\n<<< code(`block`, `m('img.tommy-niko-jasmin-hakki', {\n  src: 'content/media/tommy-niko-jasmin-hakki.png', \n  alt: 'tommy-niko-jasmin-hakki',\n  //https://stackoverflow.com/a/51817813/6025059\n  oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!\n    let inception = new Date('January 17, 2019 22:10:00');\n    let now = new Date();\n    let deg = (360/365) * Math.floor((now-inception)/(1000\\*60\\*60*24)); // convert miliseconds to degrees\n    vnode.dom.setAttribute(\"style\", \"transform: rotate(\" + deg + \"deg)\");\n  }\n  })\n`) >>>","title":"The Year Clock","tags":"a-year-clock","url":"the_year_clock","date":"2019-02-01"}]