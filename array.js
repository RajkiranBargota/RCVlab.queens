<div id="splash">
<img src="image1.jpg" alt="" id="mainImg">

</div> 

<div id="imglist">
<a href="javascript:nextImage('mainImg')"><img src="images/next_img.png" alt=""></a>



var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'image2.jpg';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'image3.jpg';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}