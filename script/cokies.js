//set cookie
function setCookie (key,value,date)
{
    document.cookie= key +"=" + value + "; expires="+ new Date (date)
}

console.log(document.cookie)


//get cookie
function getCookie (key) 
{
    var res = null
    var deta = document.cookie;
    var detaArr = deta.split("; ")
    detaArr.forEach(function (el)
    {
        var keyAndValue = el.split ("=")
        if (keyAndValue[0]===key)
        {
            res = keyAndValue [1]
        }

    })
    return res;
}



// delete cookie 

function deletCookie (key) 
{
    if (getCookie(key) === null)
    {
        throw "kye not fond"
    }
   
   setCookie(key,"aaa",new Date("1/2/1900"));
}


// CookieList
function allCookieList()
{
    return document.cookie
}

//hasCookie
function hasCookie(cookieName)
{
    var res = false;
    if (getCookie(cookieName)!= null)
    {
       res = true;
    }
   return res;
}