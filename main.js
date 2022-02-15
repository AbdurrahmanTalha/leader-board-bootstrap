
// ১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো। 

const topPlayer = document.getElementById('top-player');
const topBlog = document.getElementById('top-blog');

topPlayer.style.color = 'red';
topBlog.style.color = 'red';

topPlayer.addEventListener('click', function () {
    topPlayer.style.color = 'blue';
})

// ২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।  

const players = document.getElementsByClassName('player');

for (const player of players) {
    player.style.backgroundColor = 'rgba(255, 99, 71,0.5)';
}


// ৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে। 

document.getElementById('create-btn').addEventListener('click', function () {
    const itemBody = document.getElementById('items-body');
    const items = document.createElement('li');
    itemBody.appendChild(items).id = 'item'
    items.innerText = 'items'

})

// ৪. এখন ul এর নিচে একটা ইনপুট ফিল্ড আর একটা বাটন যোগ করো। ইনপুট ফিল্ড এ শুরুতে মান হবে শূন্য(০)। তারপর ইনপুট ফিল্ডের পাশের নতুন বাটন এ যতবার প্রেস করবে ততবার এক এক করে ইনপুট ফিল্ড এর মান এক এক করে বাড়বে।
// ৫.(চ্যালেঞ্জিং ওয়ান)উপরে বাটনে দুইটা শর্ত আছে। সেটা হচ্ছে সংখ্যা বাড়লেও সেটা হবে সর্বোচ্চ ৫। অর্থাৎ ০ থেকে এক এক করে বেড়ে বেড়ে পাঁচ পর্যন্ত হতে পারে। তার উপরে আর বাড়বে না। এবং ৫ হয়ে গেলে বাটনটা ডিজেবল হয়ে যাবে।

let input = document.getElementById('increase-input')
input.value = 0;
document.getElementById('increaser').addEventListener('click', function () {
    if (input.value < 5) {
        input.value = parseFloat(input.value) + 1
    } else if (input.value >= 5) {
        document.getElementById('increaser').setAttribute('disabled',true)
    }
})

// প্রজেক্ট চ্যালেঞ্জ

// ৬. শপিং কার্ট এর ডিজাইন দেখো। তারপর নিজে নিজে HTML, CSS(মন চাইলে কোন ফ্রেমওয়ার্ক বুটস্ট্র্যাপ বা টেইলউইন্ড) দিয়ে অথবা css৩ দিয়ে নিজে নিজে সিম্পল সাইট বানিয়ে ফল।



// ৭. তারপর শপিং কার্ট প্রজেক্টটা ইন্টারএকটিভ করার কাজটা নিজে নিজে করো। একটা শর্ত রাখতে পারো যে-- আমাদের ভিডিও না দেখে করতে পারো কিনা। যদি আমাদের ভিডিও না দেখে করতে পারো। তাহলে সেটা খুবই চমৎকার হবে। আমাদের ভিডিও না দেখলেও গুগল বা ইউটিউবে সার্চ দিতে পারবে। আর যদি একান্তই করতে না পারো। তাহলে টুক করে আমাদের ভিডিও দেখে ফেলো।






// স্ট্রিং এবং array

// ৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম(স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে।



// ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।



