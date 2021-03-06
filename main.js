
// ১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো। 

// const topPlayer = document.getElementById('top-player');
// const topBlog = document.getElementById('top-blog');

// topPlayer.style.color = 'red';
// topBlog.style.color = 'red';

// topPlayer.addEventListener('click', function () {
//     topPlayer.style.color = 'blue';
// })

// ২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।  

// const players = document.getElementsByClassName('player');

// for (const player of players) {
//     player.style.backgroundColor = 'rgba(255, 99, 71,0.5)';
// }


// ৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে। 

// document.getElementById('create-btn').addEventListener('click', function () {
//     const itemBody = document.getElementById('items-body');
//     const items = document.createElement('li');
//     itemBody.appendChild(items).id = 'item'
//     items.innerText = 'items'

// })

// ৪. এখন ul এর নিচে একটা ইনপুট ফিল্ড আর একটা বাটন যোগ করো। ইনপুট ফিল্ড এ শুরুতে মান হবে শূন্য(০)। তারপর ইনপুট ফিল্ডের পাশের নতুন বাটন এ যতবার প্রেস করবে ততবার এক এক করে ইনপুট ফিল্ড এর মান এক এক করে বাড়বে।
// ৫.(চ্যালেঞ্জিং ওয়ান)উপরে বাটনে দুইটা শর্ত আছে। সেটা হচ্ছে সংখ্যা বাড়লেও সেটা হবে সর্বোচ্চ ৫। অর্থাৎ ০ থেকে এক এক করে বেড়ে বেড়ে পাঁচ পর্যন্ত হতে পারে। তার উপরে আর বাড়বে না। এবং ৫ হয়ে গেলে বাটনটা ডিজেবল হয়ে যাবে।

// let input = document.getElementById('increase-input')
// input.value = 0;
// document.getElementById('increaser').addEventListener('click', function () {
//     if (input.value < 5) {
//         input.value = parseFloat(input.value) + 1
//     } else if (input.value >= 5) {
//         document.getElementById('increaser').setAttribute('disabled',true)
//     }
// })


// ৬. শপিং কার্ট এর ডিজাইন দেখো। তারপর নিজে নিজে HTML, CSS(মন চাইলে কোন ফ্রেমওয়ার্ক বুটস্ট্র্যাপ বা টেইলউইন্ড) দিয়ে অথবা css৩ দিয়ে নিজে নিজে সিম্পল সাইট বানিয়ে ফল। 



// ৭. তারপর শপিং কার্ট প্রজেক্টটা ইন্টারএকটিভ করার কাজটা নিজে নিজে করো। একটা শর্ত রাখতে পারো যে-- আমাদের ভিডিও না দেখে করতে পারো কিনা। যদি আমাদের ভিডিও না দেখে করতে পারো। তাহলে সেটা খুবই চমৎকার হবে। আমাদের ভিডিও না দেখলেও গুগল বা ইউটিউবে সার্চ দিতে পারবে। আর যদি একান্তই করতে না পারো। তাহলে টুক করে আমাদের ভিডিও দেখে ফেলো। 

// Done





// স্ট্রিং এবং array

// ৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম(স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে।
const javascriptBooks = [
    "A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort",
    " Eloquent JavaScript: A Modern Introduction to Programming",
    "JavaScript & JQuery: Interactive Front-End Web Development",
    " JavaScript: The Good Parts",
    "Learn JavaScript VISUALLY",
    " JavaScript: The Definitive Guide",
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "JavaScript for Kids: A Playful Introduction to Programming",
    " Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    " High-Performance Browser Networking",
    "You Don’t Know JS"
]
const searching = "javascript";
const jsBooks = [];

// Solution 1
// for (const jsbook of javascriptBooks){
//     if(jsbook.toLowerCase().indexOf(searching.toLowerCase())!=-1){
//         jsBooks.push(jsbook)
//     }

// }

// Solution 2

// for (const jsbook of javascriptBooks){
//     if(jsbook.toLowerCase().includes(searching.toLowerCase())==true){
//         jsBooks.push(jsbook);
//     }
// }
// console.log(jsBooks);



// ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।
// const numbers = [3,65,2,42,456,34,534,523,4234];
// numbers.sort()
// console.log(numbers);


// তুমি পান্ডা কমার্স নামে একটা ওয়েবসাইট তৈরি করছিলা বেশ কিছুদিন আগে। এখন সেই ওয়েবসাইটটা আবার ওপেন করো। এরপর নিচের কাজগুলো করো।

// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা ?

// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।



// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা

//     .

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

// .

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

// ৮.(অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।

// ৯.(অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।


// ALL OF THE ABOVE DONE


// দেখো তুমি এই ৯টা কাজের মধ্যে ৭টা কাজ নিজে নিজে করতে পারো কিনা। যদি করে ফেলতে পারো। তাহলে খুবই চমৎকার হবে। না পারলে গ্রূপ থেকে হেল্প নাও। সাপোর্ট সেশনে জয়েন করো।

// প্রাকটিস প্রব্লেম

// তোমার মতো করে একটা login form বানাও। যেকোনো CSS frameworks বা vanilla CSS দিয়ে তৈরি করো। এবং সে login form টি সাবমিট বাটন ক্লিক করলে তোমাকে অন্য একটা পেজ এ নিয়ে যাবে। পেজ এর টাইটেল এ লেখা থাকবে ‘Matir Bank’



// প্রাকটিস প্রব্লেম

// একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট(alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।
// ALL OF THE ABOVE HAS BEEN FINISHED

//  DOM ম্যানিপুলেশন চেকলিস্ট:

// এই চেকলিস্ট খুবই সিম্পল। এই কাজগুলো করার জন্য আগের করা কোন একটা HTML ফাইল নাও। ধরো আমরা penguin - fashion - tailwind নামে একটা প্রজেক্ট করছিলাম। কিছুদিন আগে। সেটা নিলেও হবে। এরপর নিচের জিনিসগুলো চেক করো।

// ১. আমি যদি বলি কোন একটা এলিমেন্ট কে সিলেক্ট করে নিয়ে এসে console log করে দেখাতে হবে। তুমি কি সেটা করে দেখাতে পারবে ?

// ২. সেখানে একদম হেডার এ একটা buy now বাটন আছে। সেই বাটনে একটা ক্লিক হ্যান্ডলার যোগ করতে হবে ? সেটা কি করতে পারবে ? যদি পারো তাহলে সেই বাটনে ক্লিক করলে উপরে যেখানে BE THE PENGUIN এই কথাগুলো আছে সেখানে BE THE PENGUIN এর পরিবর্তে "I AM PENGUIN" কথাটা লিখে দিতে পারবে ?

// all of the above done

// নিজে নিজে আমাদের ভিডিও না দেখে বাপ এর ব্যাংক করে ফেলো। সম্ভব হলে মডিউল ২৭ এর মতো করে করো। আর একদম না পারলে মডিউল ২৬ এর মতো করে করো। তবে চ্যালেঞ্জ হচ্ছে তুমি চাইলে গুগলে সার্চ দিতে পারবে। কিন্তু আমাদের ভিডিও দেখতে পারবে না। তাহলে তুমি কোড করতে গিয়ে ঠেকে যাবে। এই ঠেকে যাওয়া আর ২-৩ ঘন্টা গুতায় গুতায় একটা জিনিস শেষ পর্যন্ত ফিনিশ করে ফেলাটাই তোমার লার্নিং। এইসব ফ্রাসট্রেশন এর মধ্যে ঘাম ঝরিয়ে ঝরিয়েই একজন ডেভেলপার তৈরি হয়।



// .

// চ্যালেঞ্জ নাম্বার টু

// গুগলে সার্চ দাও। জাভাস্ক্রিপ্ট ক্যালকুলেটর। দেখবে এক এক সাইটে এক এক রকমের। এক এক জন এক এক ভাবে কোড করছে। সেটা ব্যাপার না। তোমার যেভাবে ভালো লাগে। সেভাবে খুঁজে খুঁজে বুঝে বুঝে করো। চোখ বন্ধ করে না। বরং বুঝে বুঝে করো। ফিউচারে কাজে লাগবে।



// .



// উপরের দুইটা কাজ। আর এই দুইটা চ্যালেঞ্জ ১০০% করতে পারলে অবশ্যই ভালো। তবে ১০০% না হলে ৮০% হলেও করে ফেলো।



// .প্রাকটিস প্রব্লেম:

// ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো।
const favFoods = ['Banana', 'Oranage', 'Lemon', 'Applem', 'Mangom'];
const searchTerm = 'm';
const output = []
for (const ele of favFoods) {
    if (ele.indexOf('m') != -1) {
        output.push(ele)
    }
}
console.log(output)


// ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে।

// এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়।





// ৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে।


// DOM এবং জাভাস্ক্রিপ্ট প্রাকটিস করে ফাটিয়ে ফেলো।
// যদিও আজকে কোন নতুন কোন মডিউল বা নতুন কোন ভিডিও নাই। তাতে কি। তাই আজকে আরো সিরিয়াসলি প্রাকটিস করে ফেলো। DOM রিলেটেড জিনিস কিন্তু খুব বেশি জিনিস না। একটু লিষ্ট করলেই তুমি দেখবে। কাজ বেশি না। তাই চিন্তাও বেশি করবে না। শুধু প্রাকটিস জিনিসটা একটু বেশি বেশি করবে। আর কিছু না।
// একটু গুছিয়ে চিন্তা করলে কাজগুলা কিন্তু সিম্পল। তোমাকে জাস্ট কয়েকটা জিনিস এই মাইলস্টোন থেকে শিখতে হবে
// ১. কিভাবে DOM থেকে কোন এলিমেন্ট খুঁজে বের করতে হয়। সেটা হতে পারে getElementById, getElementsByClassName, querySelector বা  querySelectorAll দিয়ে
// ২. কিভাবে বা কতভাবে একটা এলিমেন্ট এর উপরে ইভেন্ট সেট করতে হয়।
// ৩. ইভেন্ট সেট করার পর যে কাজগুলো করতে হয়। সেগুলা কিভাবে করতে হয়। সেই কাজগুলো সাধারণত হয়। কোন একটা জায়গা থেকে ডাটা নিয়ে(সেটা কোন একটা ইনপুট ফিল্ডে হতে পারে বা কোন টেক্সট হতে পারে) নিয়ে সেটার সাথে কিছু যোগ, বিয়োগ, গুণ, ভাগ করা। মেইন কাজগুলো কিন্তু এইগুলা।
// ৪. মেইন কাজগুলো করতে গেলে গত মাইলস্টোন এর কিছু জিনিস এমনিতে চলে আসবে। বিশেষ করে ফাংশন, ভেরিয়েবল, কন্ডিশন। আমরা এখন যে উদাহরণগুলো দেখছি সেগুলার জন্য হয়তো লুপ, অবজেক্ট বা array কম লাগতে পারে। তবে এইগুলা ফিউচারে কাজে লাগবে অবশ্যই।
// ৫. এছাড়াও আরো কিছু জিনিস আমরা শিখেছি যেগুলা কম বেশি কাজে লাগবে। যেমন Event bubble, Stop propagating, Event delegate টাইপের কিছু জিনিস।
// ৬. স্ট্রিং এবং Array এর উপরে গুরুত্বপূর্ণ কিছু জিনিস। এইগুলা ফিউচারে অনেক অনেক কাজে লাগবে।
// .
// আমরা এই মাইলস্টোন এ বেশি কিছু প্রজেক্ট দেখেছি। সেগুলা জানার এবং বাজার চেষ্টা করো। এবং নিজে নিজে সেই প্রজেক্টগুলার একটু ভেরিয়েশন এনে করার ট্রাই করো।
// ১. গিটহাব ডিলিট কনফারমেশন
// ২. বাপের ব্যাংক
// ৩. শপিং কার্ট
// ৪. পিন ম্যাচার
// ৫.ক্যালকুলেটর
// এছাড়াও আমাদের কন্সেপচুয়াল সেশনে একাধিক ছোটখাটো প্রজেক্ট দেখেছো।
// তোমার আজকের কাজ হচ্ছে। ওভারঅল মাইলস্টোন এর জিনিসগুলো রিভিশন দেয়া। প্রাকটিস করা। ঠিক করে রাখা। তাহলে আগামীকাল এর এসাইনমেন্ট ফাটিয়ে দিতে পারবে।
// জাভাস্ক্রিপ্ট বা DOM বুঝতে সমস্যা ?
//     আমরা কিন্তু বসেই আছি। তোমাকে বুঝাতে হেল্প করতে। সো, প্রথম কাজ হচ্ছে তুমি নিজে নিজে বুঝার চেষ্টা করো। তারপরের কাজ হচ্ছে আমাদের গরূপে গুছিয়ে বিস্তারিত লিখে পোস্ট দাও। আর আমাদের সাপোর্ট সেশনে জয়েন করো। ডেইলি তিন সময়ে সাপোর্ট সেশন হয়। সকাল ১১.০০, বিকাল ৪.০০ আর রাত ৯.০০। এছাড়াও কন্সেপচুয়াল সেশন হয়। প্রত্যেক মাইলস্টোন এ মিনিমাম ৩টা সেগুলাতে জয়েন করো।
// .
// হার্ডওয়ার্ক এর কোন বিকল্প নাই।
// তোমাকে চেষ্টা করতেই। সময় দিতেই হবে। আমাদের কাছে যে স্বপ্ন নিয়ে আসছো সেটার সহযোগীতা আমরা করবো। কিন্তু আদায় করে নেয়ার বুঝে নেয়ার কাজ তোমার কাছে।
// তোমার অবস্থা অনুসারে সময় বেশি লাগতে পারে। কম লাগতে পারে। কিন্তু কোন অবস্থাতেই চেষ্টার ঘাটতি থাকতে পারবে না।
// .
// ডেইলি এফোর্ট, ডেইলি লার্নিং হ্যাবিট আর হার্ডওয়ার্ক
// আর আছে তার পিছনে তাকানোর কোন দরকার পড়বে না।



