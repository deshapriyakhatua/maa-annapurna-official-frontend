document.write(`
    
    <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="/maa-annapurna-official-frontend">অন্নপূর্ণা মন্দির মেনকাপুর</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="/maa-annapurna-official-frontend/donate">দান</a></li>
                    <li><a href="/maa-annapurna-official-frontend/festival">উৎসব</a></li>
                    <li><a href="/maa-annapurna-official-frontend/festival">বিবাহ</a></li>
                    <li><a href="/maa-annapurna-official-frontend/about">বিস্তারিত</a></li>
                    <li><a href="/maa-annapurna-official-frontend/contact">যোগাযোগ</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>

    <div class="page_language_banner">
    <span>Change Language : <b>English</b></span>
    </div>
    <!-- Jquery needed -->
    <script src="/maa-annapurna-official-frontend/global/js/jquery.min.js"></script>


    <script>

        /* Show menu options */
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            $("#mainListDiv").toggleClass("show_list");
        });

    </script>
    <script src="/maa-annapurna-official-frontend/nav/navbar.js"></script>
`);