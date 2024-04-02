document.write(`
    <nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="#">অন্নপূর্ণা মন্দির</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="#">দান</a></li>
                <li><a href="#">উৎসব</a></li>
                <li><a href="#">বিস্তারিত</a></li>
                <li><a href="#">যোগাযোগ</a></li>
            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
    </nav>


    <!-- Jquery needed -->
    <script src="/maa-annapurna-official-frontend/global/js/jquery.min.js"></script>

    <!-- Function used to shrink nav bar removing paddings and adding black background -->
    <script>

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });

    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        //$("#mainListDiv").fadeIn();
    });

    </script>
    <script src="/maa-annapurna-official-frontend/nav/navbar.js"></script>
`);