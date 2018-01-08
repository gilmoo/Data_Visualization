<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Data visualization - Ruthger van den Eikhof</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/normalize.min.css">

    <link href='http://fonts.googleapis.com/css?family=Raleway:100|Open+Sans:400,300' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/main.css">
    <script src="js/d3.min.js"></script>
    <script src="js/d3.js?2.2.0"></script>
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <style type="text/css">
        @import url("css/syntax.css?1.6.0");
    </style>
</head>

<body>

    <div id="intro">
        <img src="img/intro.jpg" />
        <div class="content">
            <a>
                <h1>Data Visualization</h1>
                The European soccer database.
                <br> Applied Data Science minor.
            </a>
        </div>
    </div>

    <div id="main" class="main-container">
        <div id="project01" class="project">
            <h1>Match Results</h1>
            <div class='gallery' id='chart'>
                <button class='first' id='group' value="group" onclick='transitionGroup()'>
                    Group
                </button>
                <button class='last active' id='stack' onclick='transitionStack()'>
                    Stack
                </button>
                <br>
                <br>
            </div>
        </div>

        <div class="bcg-parallax">
            <div class="bcg"></div>
            <div class="content-wrapper">
                <h1>
                    <b>Footbal</b>
                </h1>
                <p>
                    <b>Where champions are born!</b>
                </p>
            </div>
        </div>

        <div id="project02" class="project">
            <button id="prices" value="Prices">Prices</button>
            <button id="trans">Transmission Limits</button>
            <br>
            <svg id="svg"></svg>
            <script src='js/bar.js' type='text/javascript'> </script>
            <script type="text/javascript">
                d3.select("#prices").on("click", function (d, i) {
                    prices_csv();
                })
                d3.select("#trans").on("click", function (d, i) {
                    trans_csv();
                })

                init();
            </script>
        </div>

        <div id="project03" class="project">
            <img src="img/img_project03-icon.svg" />
            <h2>Project Title</h2>
            <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                molestie vehicula. Sed.</p>
        </div>
        <div class="footer-container">
            <footer class="wrapper">
                <h3>Created by: Ruthger van den Eikhof - DS72</h3>
            </footer>
        </div>
    </div>
    <!-- #main-container -->
    <script type="text/javascript">
        d3.select("#group").on("click", function (d, i) {
            results_csv();
        })
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.2.2/d3.v3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dimple/2.1.2/dimple.latest.js"></script>
    <script src="js/main.js"></script>
    <script src="js/csv.js"></script>
    <link href='css/stack.css' rel='stylesheet' type='text/css' />
    <link href='css/button.css' rel='stylesheet' type='text/css' />
<!-- <script src='js/d3.layout.js?2.2.0' type='text/javascript'> </script> -->
    <script src='js/stream_layers.js' type='text/javascript'> </script>
    <script src='js/stack.js' type='text/javascript'> </script>
</body>

</html>