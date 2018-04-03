//temp js file
var titles;
var dates;
var entries;
var currentArticle;
var directory = "Gallery/resized/";
var extension = ".jpg";
var numpics = 16;
var currentP = 1;
var Start = function() {
	currentArticle = titles.length-1;
	displayDate();
	setArticle(currentArticle);
	setPic(currentP);
};
var displayDate = function() {
	var d = new Date();
	document.getElementById("datecon").innerHTML = d.toString();
};
var setArticle = function(num) {
	document.getElementById("ftitle").innerHTML = titles[num].toString();
	document.getElementById("fdate").innerHTML = dates[num].toString();
	document.getElementById("fentry").innerHTML = entries[num].toString();
	document.getElementById("fsrc").src = directory+(currentArticle+1)+extension;
};
var updateArticle = function(){
		if (currentArticle > 0) {
			currentArticle--;
		}else{
			currentArticle = titles.length-1;
		}
		setArticle(currentArticle);
};
var setPic = function(id) {
	document.getElementById("Gsrc").src = "Gallery/"+id+".jpg";
	document.getElementById("pnum1").innerHTML = currentP.toString();
	document.getElementById("pnum2").innerHTML = numpics.toString();
};
var changePic = function() {
	if (currentP < numpics) {
		currentP++;
	}else{
		currentP = 1;
	}
	setPic(currentP);
};

//oh so many variables.
titles = ["Humble beginnings" , "The last frost", "The expansion","Seedlings!" ,"Feels Like spring!", 
"April Showers", "Made it through!","Looking Good!", "So much rain", "Growing well so far!", "Summer Planting", "All the beans"];

dates = ["Date: 03/11/17","Date: 3/16/17" , "Date: 3/24/17","Date: 3/30/17" , "Date: 4/1/17", 
"Date: 4/5/17","Date: 4/11/17" , "Date: 4/15/17", "Date: 4/27/17", "Date: 5/8/17", "Date: 5/9/17", "Date: 5/10/17"];

entries = ["On a nice cool weekend in march, We decided we should start our garden. We had one major problem though... Where would we put it? I remember seeing planting pots and thinking we could use a bunch of them for planting. I then remembered cucumbers, Onions, and carrots need large spaces to grow. We brain stormed for a while and though what about large tubs? they are quite spacious and deep too. That would be perfect. So it was decided tubs would be the best, so we went out to our local walmart and bought the three tubs you see in the picture. We also picked up someseeds while we're there. We picked out crops that would grow best in march in our area. We noted that it was still really cold outside even though it was march.I figured we could plant when it got warmer out. The store had a wide selection of crops but we chose: Cucumbers, Carrots, Onions, and Tomatoes.",
"Well I'm honestly glad we did not plant before. Georgia's weather can be amazing sometimes. It was 27 degrees and most of our crops can't stand freezing temperatures. I went ahead and used a little soil to go ahead and plant the tomatoes and keep inside where it was warm. I read that the germination period can take up to 10 days and that frost will kill them. At this point we haven't planted anything else. We did a little thinking and decide we might want some more containers. This was going to become a much larger project.",
"We wanted more containers and I delivered. In total we have 6 containers now. I also decided that we should get some shelves to keep the plants off ground and hopefully give them more sun. I was worried because there are wild cats in my neighborhood and I have heard that their urine is deadly to some plants. I also decided that I wanted to add a bean to the mix and bought someseeds and some bamboo to make a trellis. I also realized that where the plants were before was not optimal for sunlight. This would have been bad for the cucumbers so I moved the shelves(see picture).",
"We had started to worry that nothing would grow. :( but to our surprise when I went to water the plants this morning the cucumbers and beans had sprouted! I only got a picture of the cucumbers and I had to save one of them because it was planted too deeply. hopefully I did not mess the little guy up. the tomatoes had also started to sprout but they were much smaller. Hopefully I can keep them watered and  they will grow big and strong! I know the picture is not that great but I actually was running late for work. I had some idea about getting some plastic hoses and making an auto waterer. That might have to wait though.",
"Happy April fools! I could make a nasty joke about the plants dying but that would be aweful. :) Today was another good day for plants. The carrots and onions sent up some sprouts. We also got a good in as well. This is our first planting ever so hopefully we havent overlooked anything. If you would like to give us some tips or just ask a question we will be adding a contact us page here soon. We have moved the garden around a bit to accomadate the plants sunlight needs. We made note that the back of our apartment faces the east. This was not an issue however there is a fence that was casting a shadow. So far everything is going well.",
"All this rain is great for the plants! Plus we do not have to water them as often. I found another shelf And it is perfect for the tomatoes. Everything is going great with the rest of the plants. The onions are growing a little slow but I think that is to be expected. The cucumbers are growing well, and the Tomatoes are worrying me a little, they have plenty of sunlight but it does not seem like they are growing fast.",
"Well that was scary. Horrible weather here in GA, but the plants made it through. This picture was taken a while after and I have constructed some trellises because of the wind. I used jute twine to create a small grid pattern and tied it off to the bamboo stalks that we bought a while ago . I did this for both the peas and the cucumber plants, the peas have taken quite a liking to attaching themselves to the runners.",
"WOW! I never though we would get this far! All the plants are growing really well! It even looks like I will need taller trellises for the Peas. I have a small gnat infestation and I think it from watering at night. I did a little research and I will try to water them only in the morning. Hopefully that will get rid of the gnats.",
"It has been a wonderfull week so far for the plants. I had to extend the trelisses for the peas. I read that some of them can get up to 6ft tall. I hope thats not the case  here. The tomatoes are growing wonderfully, and so are the cucumbers. I planted the peppers but I have seen much progress with them. hopefully it continues to be sunny.",
 "All I have to say is I did not think I would make it this far. We got alot of rain here last week and plants loved it. I did have to move cucumber plants because they are not getting enough sunlight. The carrots have exploded in size as well. The peas have started producing flowers too! I am going to get more soil tommorow so I can expand. I plan on planting parsnips, corn, and squash.",
 "We have fully expanded the garden! With the addition of beans, corn, parnsips, squash, and okra we have planted all that we had planned. I did make a descision to add a strawberry plant and a tabasco pepper plant. All of the buckets have been set up and I plan on starting to keep notes on the plants as they grow.",
 "Finally some real progress the first bean pod! I am so excited to see the other plants flower! very short update but is my favorite so far!"];

