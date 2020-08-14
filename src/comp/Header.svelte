<header class='header'>
    <div class='wrap d-flex'>
        <a href='/#/' class='logo'>
            <span itemprop="givenName">Daria </span>
            <span itemprop="familyName">Stepanova</span>
        </a>
        <p class='soc'>
            <a href='https://www.instagram.com/stepanovadary_cam/' target='_blank'>
                <i class='fab fa-instagram'></i>
            </a>
                
            <a href='https://www.facebook.com/dasha.stepanova.58726' target='_blank'>
                <i class='fab fa-facebook-f'></i>
            </a>
            <a href='https://www.behance.net/stepanovadary' target='_blank'>
                <i class='fab fa-behance'></i>
            </a>
        </p>
    </div>
</header>

<style type="text/scss">
.header {
    padding-top: 35px;
    margin-bottom: 35px;
    
}
.wrap {
    justify-content: space-between;
}
.logo {
    font-size: 24px;
    line-height: 28px;
    text-decoration: none;
    font-weight: bold;
    font-family: var(--theme-mainFF);
    transition: color 0.3s ease;
    span {
        vertical-align: middle;   
    }
    &:hover {
        color: var(--theme-hoverColor);
    } 
}
    

.soc {
  text-align: center;
  a {
    font-size: 1.6em;
    margin-right: 0.5em;
    transition: color 0.3s ease;
    &:hover {
        color: var(--theme-hoverColor);
    }
  }
}
</style>