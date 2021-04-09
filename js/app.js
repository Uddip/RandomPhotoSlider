var image = document.getElementById("image");
var num_images = 1;
var current_image;
var viewed = [];
var image_uptime = 30000;
var interval;

window.onload = function() {
  document.getElementById("mainNavbar").style.transition = "background-color 200ms";
  document.getElementById("send_images").onclick = function() {change_num_images()};
  loop_images();
}

/**
 * Set navigation bar to become transparent when scrolling
 */
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mainNavbar").style.backgroundColor = "rgba(33, 37, 41, 0)";
  } else {
    document.getElementById("mainNavbar").style.backgroundColor = "#212529";
  }
};

/**
 * Change image transition speed to selected speed
 * 
 * @param {*} speed - Image transition speed
 */
function transition_speed(speed) {
  image_uptime = speed;
  console.log(image_uptime);
  clearInterval(interval);
  clear_viewed();
  loop_images();
}
 /**
  * Change the number of images to display
  */
function change_num_images() {  
  num_images = document.getElementById("num_images").value;
  clearInterval(interval);
  clear_viewed();
  loop_images();
}
 /**
  * Set the interval to loop through number of images
  */
function loop_images() {
  interval = setInterval(function() {
    var count = 0;
    do {
      count++;
      if (count > num_images) {
        break;
      }
      current_image = Math.floor((Math.random() * num_images) + 1);
    } while (check_viewed(current_image));

    if (count > num_images) {
      clear_viewed();
    }

    viewed.push(current_image);
    image.src = "./images/img" + current_image + ".jpg";
  }, image_uptime);
}


/**
 * Check if picture is already viewed
 * 
 * @param {*} num - Image num to be viewed
 * @returns 
 */
function check_viewed(num) {
  for (var i = 0; i < viewed.length; i++) {
    if (num == viewed[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Clear array of viewed images
 */
function clear_viewed() {
  viewed = [];
}
