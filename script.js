// const initialPurse = 120.00; // in crores
// let currentPurse = initialPurse;
// let squadCount = 0;
// let overseasCount = 0;
// const maxSquadSize = 25;
// const maxOverseasPlayers = 8;

//* ---------------------------------

const initialPurse = 120.00; // in crores
let currentPurse;
let squadCount;
let overseasCount;
const maxSquadSize = 25;
const maxOverseasPlayers = 8;
let selectedPlayers = {}; // Object to store selected players by their ID

const players = [
    //!====================================================================================
    //* Opener - Batsman
    { id: 'p001', name: 'Virat Kohli', role: 'Opener Batsman', type: 'Batsman', price: 21, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png', isOverseas: false, category: 'Opener' },

    { id: 'p002', name: 'Rohit Sharma', role: 'Opener Batsman', type: 'Batsman', price: 16.30, image: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Rohit-Sharma-3-1024x490.webp', isOverseas: false, category: 'Opener' },

    { id: 'p003', name: 'Shubman Gill', role: 'Opener Batsman', type: 'Batsman', price: 16.50, image: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Shubman-Gill-1024x490.webp', isOverseas: false, category: 'Opener' },

    { id: 'p004 ', name: 'Faf Du Plesis', role: 'Opener Batsman', type: 'Batsman', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/94.png', isOverseas: true, category: 'Opener' },

    { id: 'p005', name: 'Yashasvi Jaiswal', role: 'Opener Batsman', type: 'Batsman', price: 18.00, image: 'https://ipltable.in/wp-content/uploads/2024/03/image-13-700x700.jpeg', isOverseas: false, category: 'Opener' },

    { id: 'p006', name: 'Ruturaj Gaikwad', role: 'Opener Batsman', type: 'Batsman', price: 13.00, image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2025/04/01101215/ruturaj-gaikwad-net-worth.jpg', isOverseas: false, category: 'Opener' },

    { id: 'p007', name: 'Priyansh Arya', role: 'Opener Batsman', type: 'Batsman', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3571.png', isOverseas: false, category: 'Opener' },

    { id: 'p008', name: 'Sai Sudharsan', role: 'Opener Batsman', type: 'Batsman', price: 8.50, image: 'https://static.toiimg.com/photo/120687119.cms', isOverseas: false, category: 'Opener' },

    { id: 'p009', name: 'Devdutt Padikkal', role: 'Opener Batsman', type: 'Batsman', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/200.png', isOverseas: false, category: 'Opener' },

    { id: 'p010', name: 'Vaibhav Sooryavanshi', role: 'Opener Batsman', type: 'Batsman', price: 1.10, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3498.png', isOverseas: false, category: 'Opener' },

    { id: 'p011', name: 'Ayush Mhatre', role: 'Opener Batsman', type: 'Batsman', price: 0.30, image: 'https://static.toiimg.com/photo/120896467.cms', isOverseas: false, category: 'Opener' },

    { id: 'p012', name: 'Jake Fraser-McGurk', role: 'Opener Batsman', type: 'Batsman', price: 9.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3115.png', isOverseas: true, category: 'Opener' },

    { id: 'p013', name: 'Shreyas Iyer', role: 'Opener Batsman', type: 'Batsman', price: 26.75, image: 'https://www.punjabkingsipl.in/static-assets/images/players/63961.png?v=6.18', isOverseas: false, category: 'Opener' },

    { id: 'p014', name: 'Shaik Rasheed', role: 'Opener Batsman', type: 'Batsman', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/778.png', isOverseas: false, category: 'Opener' },






    //!====================================================================================
    //* Opener - Wicket-Keeper
    { id: 'p015', name: 'Jos Buttler', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 15.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/182.png', isOverseas: true, category: 'Opener' },

    { id: 'p016', name: 'Phill Salt', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 11.00, image: 'https://preview.redd.it/thankyou-phill-salt-for-your-knock-v0-fv08gegkklue1.png?width=640&crop=smart&auto=webp&s=321a8048422230eed09d071342781b43dc8db4fd', isOverseas: true, category: 'Opener' },

    { id: 'p017', name: 'Quinton de Kock', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 3.60, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/170.png', isOverseas: true, category: 'Opener' },

    { id: 'p018', name: 'Prabhsimran Singh', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 4.00, image: 'https://static.toiimg.com/photo/120897382.cms', isOverseas: false, category: 'Opener' },

    { id: 'p019', name: 'Sanju Samson', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 18.00, image: 'https://i.pinimg.com/736x/ad/44/8c/ad448c61409fb11e7f8d85be9f21bf78.jpg', isOverseas: false, category: 'Opener' },

    { id: 'p020', name: 'Jhony Bairstow', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/216.png', isOverseas: true, category: 'Opener' },

    { id: 'p021', name: 'Devon Conway', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 6.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/601.png', isOverseas: true, category: 'Opener' },

    { id: 'p022', name: 'Rahmanullah Gurbaz', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/641.png', isOverseas: true, category: 'Opener' },

    { id: 'p023', name: 'KL Rahul', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 14.00, image: 'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/KL%20Rahul.png', isOverseas: false, category: 'Opener' },

    { id: 'p024', name: 'Ishan Kishan', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 11.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/164.png', isOverseas: false, category: 'Opener' },

    { id: 'p025', name: 'Matthew Breetzke', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2805.png', isOverseas: true, category: 'Opener' },

    { id: 'p026', name: 'Ryan Rickelton', role: 'Opener Wicket-Keeper', type: 'Wicket-Keeper', price: 1.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/743.png', isOverseas: true, category: 'Opener' },






    //!====================================================================================
    //* Opener - Spinner All-Rounder

    { id: 'p027', name: 'Abhishek Sharma', role: 'Opener Spinner All-Rounder', type: 'All-Rounder', price: 14.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/212.png', isOverseas: false, category: 'Opener' },

    { id: 'p028', name: 'Sunil Narine', role: 'Opener Spinner All-Rounder', type: 'All-Rounder', price: 12.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/156.png', isOverseas: true, category: 'Opener' },

    { id: 'p029', name: 'Travis Head', role: 'Opener Spinner All-Rounder', type: 'All-Rounder', price: 14.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/37.png', isOverseas: true, category: 'Opener' },





    //!====================================================================================
    //* Opener - Pacer All-Rounder

    { id: 'p030', name: 'Mitchell Marsh', role: 'Opener Pacer All-Rounder', type: 'All-Rounder', price: 3.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/40.png', isOverseas: true, category: 'Opener' },

    { id: 'p031', name: 'Aaron Hardie', role: 'Opener Pacer All-Rounder', type: 'All-Rounder', price: 1.25, image: 'https://www.punjabkingsipl.in/static-assets/images/players/68072.png?v=6.18', isOverseas: true, category: 'Opener' },





    //!====================================================================================
    //* Middle Order - Batsman

    { id: 'p032', name: 'Rajat Patidar', role: 'Middle Order Batsman', type: 'Batsman', price: 11.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p033', name: 'Suryakumar Yadav', role: 'Middle Order Batsman', type: 'Batsman', price: 16.35, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/174.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p034', name: 'Dewald Brevis', role: 'Middle Order Batsman', type: 'Batsman', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/797.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p035', name: 'Mayank Agarwal', role: 'Middle Order Batsman', type: 'Batsman', price: 1.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/55.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p036', name: 'Shahrukh Khan', role: 'Middle Order Batsman', type: 'Batsman', price: 4.00, image: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Shahrukh-Khan-GT.webp', isOverseas: false, category: 'Middle Order' },

    { id: 'p037', name: 'Harry Brook', role: 'Middle Order Batsman', type: 'Batsman', price: 6.25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiBmL-siF_dW-kpzDkCX3C8gD2a5jq4DosQ&s', isOverseas: true, category: 'Middle Order' },

    { id: 'p038', name: 'Nehal Wadhera', role: 'Middle Order Batsman', type: 'Batsman', price: 4.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1541.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p039', name: 'Rahul Tripathi', role: 'Middle Order Batsman', type: 'Batsman', price: 3.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/188.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p040', name: 'Ajinkya Rahane', role: 'Middle Order Batsman', type: 'Batsman', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p042', name: 'Sameer Rizvi', role: 'Middle Order Batsman', type: 'Batsman', price: 0.95, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1229.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p043', name: 'Tilak Varma', role: 'Middle Order Batsman', type: 'Batsman', price: 8.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/993.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p044', name: 'David Miller', role: 'Middle Order Batsman', type: 'Batsman', price: 7.50, image: 'https://static.toiimg.com/photo/120897037.cms', isOverseas: true, category: 'Middle Order' },

    { id: 'p045', name: 'Manish Pandey', role: 'Middle Order Batsman', type: 'Batsman', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/16.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p046', name: 'Karun Nair', role: 'Middle Order Batsman', type: 'Batsman', price: 0.50, image: 'https://static.toiimg.com/photo/120896555.cms', isOverseas: true, category: 'Middle Order' },

    { id: 'p047', name: 'Naman Dhir', role: 'Middle Order Batsman', type: 'Batsman', price: 5.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3107.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p048', name: 'Sherfane Rutherford', role: 'Middle Order Batsman', type: 'Batsman', price: 2.60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhlVLaoqAMZmmt75ydXM6DgbaRin4OxyWXQ&s', isOverseas: true, category: 'Middle Order' },

    { id: 'p049', name: 'Shubham Dubey', role: 'Middle Order Batsman', type: 'Batsman', price: 0.80, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3112.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p050', name: 'Swastik Chikara', role: 'Middle Order Batsman', type: 'Batsman', price: .30, image: 'https://static.toiimg.com/photo/120897575.cms', isOverseas: false, category: 'Middle Order' },






    //!====================================================================================
    //* Middle Order - Pacer All-Rounder

    { id: 'p051', name: 'Cameron Green', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 17.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/550.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p052', name: 'Ben Stokes', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 12.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2023/177.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p053', name: 'Nitish Kumar Reddy', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 6.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p054', name: 'Shivam Dube', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 12.00, image: 'https://d1k8sn41pix00a.cloudfront.net/media/players/photos/Shivam_Dube.webp', isOverseas: false, category: 'Middle Order' },

    { id: 'p055', name: 'Hardik Pandya', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 16.35, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p056', name: 'Marcus Stoinis', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 11.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/23.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p057', name: 'Rovman Powell', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/329.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p058', name: 'Marco Jansen', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 7.00, image: 'https://www.punjabkingsipl.in/static-assets/images/players/69409.png?v=6.18', isOverseas: true, category: 'Middle Order' },

    { id: 'p059', name: 'Sam Curran', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 2.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/138.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p060', name: 'Dasun Shanaka', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 0.75, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylsqZLeP7APSmcobxRHPu3oL7UnPIZZbumA&s', isOverseas: true, category: 'Middle Order' },

    { id: 'p061', name: 'Wiaan Mulder', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/630.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p062', name: 'Venkatesh Iyer ', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 23.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/584.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p063', name: 'Vijay Shankar', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 1.20, image: 'https://static.toiimg.com/photo/120896401.cms', isOverseas: false, category: 'Middle Order' },

    { id: 'p064', name: 'Mitchell Owen', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 3.00, image: 'https://www.punjabkingsipl.in/static-assets/images/players/81813.png?v=6.29', isOverseas: true, category: 'Middle Order' },

    { id: 'p065', name: 'Manoj Bhandage ', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 0.30, image: 'https://ipltable.in/wp-content/uploads/2024/03/image-8.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p066', name: 'Karim Janat', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/247.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p067', name: 'Azmatullah Omarzai', role: 'Middle Order Pacer All-Rounder', type: 'All-Rounder', price: 2.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1354.png', isOverseas: true, category: 'Middle Order' },







    //!====================================================================================
    //* Middle Order - Spinner All-Rounder

    { id: 'p068', name: 'Moeen Ali', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/206.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p069', name: 'Liam Livingstone', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 8.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/183.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p070', name: 'Aiden Markram', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/287.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p071', name: 'Will Jacks', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 5.25, image: 'https://static.toiimg.com/photo/120897186.cms', isOverseas: true, category: 'Middle Order' },

    { id: 'p072', name: 'Riyan Parag', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 14.00, image: 'https://preview.redd.it/rajasthan-royals-has-changed-its-name-to-riyan-royals-v0-pvhxi7nt5cve1.jpeg?auto=webp&s=465cdee475b3db63a22aa0ecce29e302cfc5be36', isOverseas: false, category: 'Middle Order' },

    { id: 'p073', name: 'Glenn Maxwell', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 4.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/28.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p074', name: 'Krunal Pandya', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 5.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p075', name: 'Glenn Phillips', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/635.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p076', name: 'Jacob Bethell', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.60, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/869.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p077', name: 'R. Ashwin', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 9.75, image: 'https://images.news18.com/webstories/uploads/2024/03/R-Ashwin-2024-03-e07ae819e3a367bcdd269580efeca201.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p078', name: 'Axar Patel', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 16.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/110.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p079', name: 'Ravindra Jadeja', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/46.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p080', name: 'Swapnil Singh', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 0.50, image: 'https://static.toiimg.com/photo/120897577.cms', isOverseas: false, category: 'Middle Order' },

    { id: 'p081', name: 'Mahipal Lomror', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 1.70, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/184.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p082', name: 'Rachin Ravindra', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/724.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p083', name: 'Kamindu Mendis', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/627.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p084', name: 'Abdul Samad', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 4.20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz42aGwUUdMsrHhzuVtvybe33hnxddpEroTA&s', isOverseas: false, category: 'Middle Order' },

    { id: 'p085', name: 'Nitish Rana', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 4.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/148.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p086', name: 'Washington Sundar', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 3.20, image: 'https://d1k8sn41pix00a.cloudfront.net/media/players/photos/Washington_Sundar.webp', isOverseas: false, category: 'Middle Order' },

    { id: 'p087', name: 'Ayush Badoni', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/985.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p088', name: 'Deepak Hooda', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 1.70, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/215.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p089', name: 'Mitchell Santner', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/75.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p090', name: 'Shahbaz Ahmed', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 2.40, image: 'https://www.lucknowsupergiants.in/static-assets/images/players/58223.png?v=12.66', isOverseas: false, category: 'Middle Order' },

    { id: 'p091', name: 'Charith Asalanka', role: 'Middle Order Spinner All-Rounder', type: 'All-Rounder', price: 0.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/605.png', isOverseas: true, category: 'Middle Order' },









    //!====================================================================================
    //* Middle Order - Wicket-Keeper

    { id: 'p092', name: 'Heinrich Klassen', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 23.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/202.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p093', name: 'Anuj Rawat', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 0.30, image: 'https://static.toiimg.com/photo/120687167.cms', isOverseas: false, category: 'Middle Order' },

    { id: 'p094', name: 'Tim Seifert', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 1.25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-L6XzDqmMsaDR5PJUXzihh6P0rctSLekpaA&s', isOverseas: true, category: 'Middle Order' },

    { id: 'p095', name: 'Nicholas Pooran', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 21.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/136.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p096', name: 'Josh Inglis', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 2.60, image: 'https://static.toiimg.com/photo/120897402.cms', isOverseas: true, category: 'Middle Order' },

    { id: 'p097', name: 'Tristan Stubbs', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 10.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/1017.png', isOverseas: true, category: 'Middle Order' },

    { id: 'p098', name: 'Dhruv Jurel', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 14.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1004.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p099', name: 'Rishabh Pant', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 27.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/18.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p100', name: 'Abishek Porel', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1580.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p101', name: 'Urvil Patel', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1486.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p102', name: 'Robin Minz', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 0.65, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3103.png', isOverseas: false, category: 'Middle Order' },

    { id: 'p103', name: 'Donovan Ferreira', role: 'Middle Order Wicket-Keeper', type: 'Wicket-Keeper', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2033.png', isOverseas: true, category: 'Middle Order' },








    //!====================================================================================
    //* Finisher - Batsman

    { id: 'p104', name: 'Rinku Singh', role: 'Finisher Batsman', type: 'Batsman', price: 13.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/152.png', isOverseas: false, category: 'Finisher' },

    { id: 'p105', name: 'Shashank Singh', role: 'Finisher Batsman', type: 'Batsman', price: 5.50, image: 'https://preview.redd.it/appreciation-post-for-shashank-singh-v0-dzt8bxr0jnte1.jpeg?width=640&crop=smart&auto=webp&s=30f643f9b1d198079135bedcce435c9a33c6c260', isOverseas: false, category: 'Finisher' },

    { id: 'p106', name: 'Ashutosh Sharma', role: 'Finisher Batsman', type: 'Batsman', price: 3.80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnO9QFHK0gsEOjz8_mPqhulBDmiTprsZnZ9g&s', isOverseas: false, category: 'Finisher' },

    { id: 'p107', name: 'Shimron Hetmyer', role: 'Finisher Batsman', type: 'Batsman', price: 11.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/210.png', isOverseas: true, category: 'Finisher' },











    //!====================================================================================
    //* Finisher - Pacer All-Rounder

    { id: 'p108', name: 'Romario Shepherd', role: 'Finisher Pacer All-Rounder', type: 'All-Rounder', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/371.png', isOverseas: true, category: 'Finisher' },

    { id: 'p109', name: 'Andre Russell', role: 'Finisher Pacer All-Rounder', type: 'All-Rounder', price: 12.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/141.png', isOverseas: true, category: 'Finisher' },

    { id: 'p110', name: 'Ramandeep Singh', role: 'Finisher Pacer All-Rounder', type: 'All-Rounder', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/991.png', isOverseas: false, category: 'Finisher' },









    //!====================================================================================
    //* Finisher - Spinner All-Rounder

    { id: 'p111', name: 'Tim David', role: 'Finisher Spinner All-Rounder', type: 'All-Rounder', price: 3.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/636.png', isOverseas: true, category: 'Finisher' },

    { id: 'p112', name: 'Rahul Tewatia', role: 'Finisher Spinner All-Rounder', type: 'All-Rounder', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/120.png', isOverseas: false, category: 'Finisher' },








    //!====================================================================================
    //* Finisher - Wicket-Keeper

    { id: 'p113', name: 'MS Dhoni', role: 'Finisher Wicket-Keeper', type: 'Wicket-Keeper', price: 4.00, image: 'https://i.pinimg.com/736x/36/d7/f3/36d7f3e4ea55ed1e87f81fd930827888.jpg', isOverseas: false, category: 'Finisher' },

    { id: 'p114', name: 'Jitesh Sharma', role: 'Finisher Wicket-Keeper', type: 'Wicket-Keeper', price: 11.00, image: 'https://i.redd.it/zweg1v5hofte1.png', isOverseas: false, category: 'Finisher' },









    //!====================================================================================
    //* Spinners

    { id: 'p115', name: 'Rashid Khan', role: 'Leg-Spinner', type: 'Spinner', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/218.png', isOverseas: true, category: 'Spinner' },

    { id: 'p116', name: 'Yuzvendra Chahal', role: 'Leg-Spinner', type: 'Spinner', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/10.png', isOverseas: false, category: 'Spinner' },

    { id: 'p117', name: 'Adam Zampa', role: 'Leg-Spinner', type: 'Spinner', price: 2.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/24.png', isOverseas: true, category: 'Spinner' },

    { id: 'p118', name: 'Kuldeep Yadav', role: 'Chinaman', type: 'Spinner', price: 13.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/14.png', isOverseas: false, category: 'Spinner' },

    { id: 'p119', name: 'Suyash Sharma', role: 'Leg-Spinner', type: 'Spinner', price: 2.60, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1932.png', isOverseas: false, category: 'Spinner' },

    { id: 'p120', name: 'Allah Ghazanfar', role: 'Off-Spinner', type: 'Spinner', price: 4.80, image: 'https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/96648.png?v=5.15&w=400', isOverseas: true, category: 'Spinner' },

    { id: 'p121', name: 'Noor Ahmad', role: 'Chinaman', type: 'Spinner', price: 10.00, image: 'https://d1k8sn41pix00a.cloudfront.net/media/players/photos/noor_ahmad.png', isOverseas: true, category: 'Spinner' },

    { id: 'p122', name: 'Ravi Bishnoi', role: 'Leg-Spinner', type: 'Spinner', price: 11.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/520.png', isOverseas: false, category: 'Spinner' },

    { id: 'p123', name: 'Maheesh Theekshana', role: 'Off-Spinner', type: 'Spinner', price: 4.40, image: 'https://static.toiimg.com/photo/120897501.cms', isOverseas: true, category: 'Spinner' },

    { id: 'p124', name: 'Varun Chakaravarthy', role: 'Leg-Spinner', type: 'Spinner', price: 12.00, image: 'https://iplcricbet.com/wp-content/uploads/2024/04/Varun-Chakravarthy.jpg', isOverseas: false, category: 'Spinner' },

    { id: 'p125', name: 'Wanindu Hasaranga', role: 'Leg-Spinner', type: 'Spinner', price: 4.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/377.png', isOverseas: true, category: 'Spinner' },

    { id: 'p126', name: 'Karn Sharma', role: 'Leg-Spinner', type: 'Spinner', price: 5.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/98.png', isOverseas: false, category: 'Spinner' },

    { id: 'p127', name: 'Mujeeb Ur Rahman', role: 'Off-Spinner', type: 'Spinner', price: 2.00, image: 'https://www.sasdigitaltv.com/images/posts/mujeeb-ur-rahman-joins-mumbai-indians-for-ipl-2025.webp', isOverseas: true, category: 'Spinner' },

    { id: 'p128', name: 'Mayank Markande', role: 'Leg-Spinner', type: 'Spinner', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/87.png', isOverseas: false, category: 'Spinner' },

    { id: 'p129', name: 'Rahul Chahar', role: 'Leg-Spinner', type: 'Spinner', price: 3.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/171.png', isOverseas: false, category: 'Spinner' },

    { id: 'p130', name: 'Harpreet Brar', role: 'Orthodox', type: 'Spinner', price: 1.50, image: 'https://ipltable.in/wp-content/uploads/2024/03/image-72-700x700.jpeg', isOverseas: false, category: 'Spinner' },

    { id: 'p131', name: 'Sai Kishore', role: 'Orthodox', type: 'Spinner', price: 2.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/544.png', isOverseas: false, category: 'Spinner' },

    { id: 'p132', name: 'Digvesh Singh Rathi', role: 'Leg-Spinner', type: 'Spinner', price: 0.30, image: 'https://cruxpedia.org/images/thumb/d/df/Digvesh-rathi.png/300px-Digvesh-rathi.png', isOverseas: false, category: 'Spinner' },

    { id: 'p133', name: 'Vipraj Nigam', role: 'Leg-Spinner', type: 'Spinner', price: 0.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3560.png', isOverseas: false, category: 'Spinner' },

    { id: 'p134', name: 'Mohit Rathee', role: 'Leg-Spinner', type: 'Spinner', price: 0.30, image: 'https://static.toiimg.com/photo/120897595.cms', isOverseas: false, category: 'Spinner' },

    { id: 'p135', name: 'Zeeshan Ansari', role: 'Leg-Spinner', type: 'Spinner', price: 0.40, image: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-1943308,resizemode-75,msid-119753128/news/sports/who-is-zeeshan-ansari-making-debut-for-srh-all-you-need-to-know-about-the-up-spinner/zeeshan.jpg', isOverseas: false, category: 'Spinner' },

    { id: 'p136', name: 'Kumar Kartikeya', role: 'Wrist-Spinner', type: 'Spinner', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1015.png', isOverseas: false, category: 'Spinner' },









    //!====================================================================================
    //* Pacers

    { id: 'p137', name: 'Jasprit Bumrah', role: 'Fast Bowler', type: 'Pacer', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png', isOverseas: false, category: 'Pacer' },

    { id: 'p138', name: 'Bhuvneshwar Kumar', role: 'Fast Bowler', type: 'Pacer', price: 10.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png', isOverseas: false, category: 'Pacer' },

    { id: 'p139', name: 'Mohammed Shami', role: 'Fast Bowler', type: 'Pacer', price: 10.00, image: 'shami.png', isOverseas: false, category: 'Pacer' },

    { id: 'p140', name: 'Trent Boult', role: 'Fast Bowler', type: 'Pacer', price: 12.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/66.png', isOverseas: true, category: 'Pacer' },

    { id: 'p142', name: 'Kagiso Rabada', role: 'Fast Bowler', type: 'Pacer', price: 10.75, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSVFvR7bAiweRourLx9OoRpV91-JBpUrwQw&s', isOverseas: true, category: 'Pacer' },

    { id: 'p143', name: 'Mitchell Starc', role: 'Fast Bowler', type: 'Pacer', price: 11.75, image: 'https://static.toiimg.com/photo/120896543.cms', isOverseas: true, category: 'Pacer' },

    { id: 'p144', name: 'Mohammed Siraj', role: 'Fast Bowler', type: 'Pacer', price: 12.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/63.png', isOverseas: false, category: 'Pacer' },

    { id: 'p145', name: 'Josh Hazlewood', role: 'Fast Bowler', type: 'Pacer', price: 12.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png', isOverseas: true, category: 'Pacer' },

    { id: 'p146', name: 'Harshal Patel', role: 'Fast Bowler', type: 'Pacer', price: 8.00, image: 'harshal patel.png', isOverseas: false, category: 'Pacer' },

    { id: 'p147', name: 'Yash Dayal', role: 'Fast Bowler', type: 'Pacer', price: 5.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/978.png', isOverseas: false, category: 'Pacer' },

    { id: 'p148', name: 'Arshdeep Singh', role: 'Fast Bowler', type: 'Pacer', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/125.png', isOverseas: false, category: 'Pacer' },

    { id: 'p149', name: 'Mohsin Khan', role: 'Fast Bowler', type: 'Pacer', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/541.png', isOverseas: false, category: 'Pacer' },

    { id: 'p150', name: 'Mukesh Kumar', role: 'Fast Bowler', type: 'Pacer', price: 8.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1462.png', isOverseas: false, category: 'Pacer' },

    { id: 'p151', name: 'Khaleel Ahmed', role: 'Fast Bowler', type: 'Pacer', price: 4.80, image: 'https://csk-team-2025.weebly.com/uploads/1/5/2/2/152204247/khaleel-ahmed_orig.png', isOverseas: false, category: 'Pacer' },

    { id: 'p152', name: 'Jofra Archer', role: 'Fast Bowler', type: 'Pacer', price: 12.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/181.png', isOverseas: true, category: 'Pacer' },

    { id: 'p153', name: 'Anrich Nortje', role: 'Fast Bowler', type: 'Pacer', price: 6.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/142.png', isOverseas: true, category: 'Pacer' },

    { id: 'p154', name: 'Nuwan Thushara', role: 'Fast Bowler', type: 'Pacer', price: 1.60, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/813.png', isOverseas: true, category: 'Pacer' },

    { id: 'p155', name: 'Fazalhaq Farooqi', role: 'Fast Bowler', type: 'Pacer', price: 2.00, image: 'https://static.toiimg.com/photo/120897511.cms', isOverseas: true, category: 'Pacer' },

    { id: 'p156', name: 'Kyle Jamieson', role: 'Fast Bowler', type: 'Pacer', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/382.png', isOverseas: true, category: 'Pacer' },

    { id: 'p157', name: 'Lungi Ngidi', role: 'Fast Bowler', type: 'Pacer', price: 1.00, image: 'https://static.toiimg.com/photo/120897599.cms', isOverseas: true, category: 'Pacer' },

    { id: 'p158', name: 'Reece Topley', role: 'Fast Bowler', type: 'Pacer', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/574.png', isOverseas: true, category: 'Pacer' },

    { id: 'p159', name: 'Pat Cummins', role: 'Fast Bowler', type: 'Pacer', price: 18.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png', isOverseas: true, category: 'Pacer' },

    { id: 'p160', name: 'Shardul Thakur', role: 'Fast Bowler', type: 'Pacer', price: 2.00, image: 'https://www.lucknowsupergiants.in/static-assets/images/players/63345.png?v=12.66', isOverseas: false, category: 'Pacer' },

    { id: 'p161', name: 'Harshit Rana', role: 'Fast Bowler', type: 'Pacer', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1013.png', isOverseas: false, category: 'Pacer' },

    { id: 'p162', name: 'Mukesh Choudhary', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/970.png', isOverseas: false, category: 'Pacer' },

    { id: 'p163', name: 'T Natarajan', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/224.png', isOverseas: false, category: 'Pacer' },

    { id: 'p164', name: 'Prasidh Krishna', role: 'Fast Bowler', type: 'Pacer', price: 9.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/150.png', isOverseas: false, category: 'Pacer' },

    { id: 'p165', name: 'Umran Malik', role: 'Fast Bowler', type: 'Pacer', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/637.png', isOverseas: false, category: 'Pacer' },

    { id: 'p166', name: 'Matheesha Pathirana', role: 'Fast Bowler', type: 'Pacer', price: 13.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1014.png', isOverseas: true, category: 'Pacer' },

    { id: 'p167', name: 'Sandeep Sharma', role: 'Fast Bowler', type: 'Pacer', price: 4.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/220.png', isOverseas: false, category: 'Pacer' },

    { id: 'p168', name: 'Mayank Yadav', role: 'Fast Bowler', type: 'Pacer', price: 11.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/987.png', isOverseas: false, category: 'Pacer' },

    { id: 'p169', name: 'Anshul Kamboj', role: 'Fast Bowler', type: 'Pacer', price: 3.40, image: 'https://static.toiimg.com/photo/120896469.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p170', name: 'Tushar Deshpande', role: 'Fast Bowler', type: 'Pacer', price: 6.50, image: 'https://static.toiimg.com/photo/120897494.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p171', name: 'Spencer Johnson', role: 'Fast Bowler', type: 'Pacer', price: 2.80, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2518.png', isOverseas: true, category: 'Pacer' },

    { id: 'p172', name: 'Simarjeet Singh', role: 'Fast Bowler', type: 'Pacer', price: 1.50, image: 'https://static.toiimg.com/photo/120897671.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p173', name: 'Rasikh Dar Salam', role: 'Fast Bowler', type: 'Pacer', price: 6.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/172.png', isOverseas: false, category: 'Pacer' },

    { id: 'p174', name: 'Mohit Sharma', role: 'Fast Bowler', type: 'Pacer', price: 2.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/100.png', isOverseas: false, category: 'Pacer' },

    { id: 'p175', name: 'Xavier Bartlett', role: 'Fast Bowler', type: 'Pacer', price: 0.80, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3572.png', isOverseas: true, category: 'Pacer' },

    { id: 'p176', name: 'Deepak Chahar', role: 'Fast Bowler', type: 'Pacer', price: 9.25, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/91.png', isOverseas: false, category: 'Pacer' },

    { id: 'p177', name: 'Ishant Sharma', role: 'Fast Bowler', type: 'Pacer', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/50.png', isOverseas: false, category: 'Pacer' },

    { id: 'p178', name: 'Avesh Khan', role: 'Fast Bowler', type: 'Pacer', price: 9.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/109.png', isOverseas: false, category: 'Pacer' },

    { id: 'p179', name: 'Nathan Ellis', role: 'Fast Bowler', type: 'Pacer', price: 2.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtuwjCt8nMwuV6DEaXn0leIPO3WQEw6lFFQ&s', isOverseas: true, category: 'Pacer' },

    { id: 'p180', name: 'Nandre Burger', role: 'Fast Bowler', type: 'Pacer', price: 0.50, image: 'https://www.rajasthanroyals.com/static-assets/images/players/66195.png?v=7.36', isOverseas: true, category: 'Pacer' },

    { id: 'p181', name: 'Vaibhav Arora', role: 'Fast Bowler', type: 'Pacer', price: 1.80, image: 'https://static.toiimg.com/photo/120896864.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p182', name: 'Jaydev Unadkat', role: 'Fast Bowler', type: 'Pacer', price: 1.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/180.png', isOverseas: false, category: 'Pacer' },

    { id: 'p183', name: 'Dushmantha Chameera', role: 'Fast Bowler', type: 'Pacer', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/608.png', isOverseas: true, category: 'Pacer' },

    { id: 'p184', name: 'Vijaykumar Vyshak', role: 'Fast Bowler', type: 'Pacer', price: 1.80, image: 'https://static.toiimg.com/photo/120897354.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p185', name: 'Richard Gleeson', role: 'Fast Bowler', type: 'Pacer', price: 1.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1219.png', isOverseas: true, category: 'Pacer' },

    { id: 'p186', name: 'Gerald Coetzee', role: 'Fast Bowler', type: 'Pacer', price: 2.40, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2535.png', isOverseas: true, category: 'Pacer' },

    { id: 'p187', name: 'William ORourke', role: 'Fast Bowler', type: 'Pacer', price: 3.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3398.png', isOverseas: true, category: 'Pacer' },

    { id: 'p188', name: 'Jamie Overton', role: 'Fast Bowler', type: 'Pacer', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1216.png', isOverseas: true, category: 'Pacer' },

    { id: 'p189', name: 'Akash Madhwal', role: 'Fast Bowler', type: 'Pacer', price: 1.20, image: 'https://static.toiimg.com/photo/120897521.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p190', name: 'Eshan Malinga', role: 'Fast Bowler', type: 'Pacer', price: 1.20, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3339.png', isOverseas: true, category: 'Pacer' },

    { id: 'p191', name: 'Shamar Joseph', role: 'Fast Bowler', type: 'Pacer', price: 0.75, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3105.png', isOverseas: true, category: 'Pacer' },

    { id: 'p192', name: 'Blessing Muzarabani', role: 'Fast Bowler', type: 'Pacer', price: 0.70, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/827.png', isOverseas: true, category: 'Pacer' },

    { id: 'p193', name: 'Mustafizur Rahman', role: 'Fast Bowler', type: 'Pacer', price: 6.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/258.png', isOverseas: true, category: 'Pacer' },

    { id: 'p194', name: 'Yash Thakur', role: 'Fast Bowler', type: 'Pacer', price: 1.60, image: 'https://www.punjabkingsipl.in/static-assets/images/players/66819.png?v=6.18', isOverseas: false, category: 'Pacer' },

    { id: 'p195', name: 'Prince Yadav', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1225.png', isOverseas: false, category: 'Pacer' },

    { id: 'p196', name: 'Ashwani Kumar', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3569.png', isOverseas: false, category: 'Pacer' },

    { id: 'p197', name: 'Kulwant Khejroliya', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://static.toiimg.com/photo/120687144.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p198', name: 'Akash Deep', role: 'Fast Bowler', type: 'Pacer', price: 8.00, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/1007.png', isOverseas: false, category: 'Pacer' },

    { id: 'p199', name: 'Kwena Maphaka', role: 'Fast Bowler', type: 'Pacer', price: 1.50, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/801.png', isOverseas: true, category: 'Pacer' },

    { id: 'p200', name: 'Abhinandan Singh', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3574.png', isOverseas: false, category: 'Pacer' },

    { id: 'p201', name: 'Arjun Tendulkar', role: 'Fast Bowler', type: 'Pacer', price: 0.30, image: 'https://static.toiimg.com/photo/120897225.cms', isOverseas: false, category: 'Pacer' },

    { id: 'p202', name: 'Arshad Khan', role: 'Fast Bowler', type: 'Pacer', price: 1.30, image: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/988.png', isOverseas: false, category: 'Pacer' },




];

const playerSubgroups = {
    'opener-batsman': [],
    'opener-pacer-ar': [],
    'opener-spinner-ar': [],
    'opener-wk': [],
    'middle-batsman': [],
    'middle-pacer-ar': [],
    'middle-spinner-ar': [],
    'middle-wk': [],
    'finisher-batsman': [],
    'finisher-pacer-ar': [],
    'finisher-spinner-ar': [],
    'finisher-wk': [],
    'spinners': [],
    'pacers': [],
};

const auctionGroups = {
    'auction-batsman': [],
    'auction-allrounder': [],
    'auction-wicketkeeper': [],
    'auction-spinner': [],
    'auction-pacer': [],
};

const elements = {
    currentPurse: document.getElementById('currentPurse'),
    squadCount: document.getElementById('squadCount'),
    overseasCount: document.getElementById('overseasCount'),
    resetAuctionBtn: document.getElementById('resetAuctionBtn'),
};

/*


function initializePlayers() {
    players.forEach(player => {
        let subgroupId;
        switch (player.category) {
            case 'Opener':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'opener-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'opener-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'opener-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'opener-wk';
                break;
            case 'Middle Order':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'middle-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'middle-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'middle-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'middle-wk';
                break;
            case 'Finisher':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'finisher-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'finisher-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'finisher-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'finisher-wk';
                break;
            case 'Spinner':
                subgroupId = 'spinners';
                break;
            case 'Pacer':
                subgroupId = 'pacers';
                break;
        }
        if (subgroupId) {
            playerSubgroups[subgroupId].push(player);
        }
    });
    renderPlayers();
    updatePurseDisplay();
}

function renderPlayers() {
    for (const subgroupId in playerSubgroups) {
        const subgroupElement = document.getElementById(subgroupId);
        if (subgroupElement) {
            subgroupElement.innerHTML = subgroupElement.querySelector('h4') ? subgroupElement.querySelector('h4').outerHTML : ''; // Keep the subgroup title if it exists
            playerSubgroups[subgroupId].forEach(player => {
                const playerCard = createPlayerCard(player, false);
                subgroupElement.appendChild(playerCard);
            });
        }
    }
}

function createPlayerCard(player, inAuctionTable) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.dataset.id = player.id;
    playerCard.dataset.price = player.price;
    playerCard.dataset.isOverseas = player.isOverseas;
    playerCard.dataset.type = player.type; // Store player type for auction table sorting

    if (player.isOverseas) {
        playerCard.classList.add('overseas');
    }

    playerCard.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <h4>${player.name}</h4>
        <p>${player.role}</p>
        <p class="price">₹${player.price.toFixed(2)} Cr</p>
    `;

    if (!inAuctionTable) {
        playerCard.addEventListener('click', () => addPlayerToSquad(player));
    } else {
        // For players in the auction table, you might want a "remove" functionality
        // For simplicity in this initial build, we'll just show them
    }

    return playerCard;
}

function updatePurseDisplay() {
    elements.currentPurse.textContent = currentPurse.toFixed(2);
    elements.squadCount.textContent = squadCount;
    elements.overseasCount.textContent = overseasCount;

    // Optional: Add visual feedback for purse
    if (currentPurse < 20 && currentPurse > 0) {
        elements.currentPurse.style.color = 'orange';
    } else if (currentPurse <= 0) {
        elements.currentPurse.style.color = 'red';
    } else {
        elements.currentPurse.style.color = 'white';
    }
}

function addPlayerToSquad(player) {
    if (squadCount >= maxSquadSize) {
        alert('You have reached the maximum squad size of 25 players.');
        return;
    }
    if (player.isOverseas && overseasCount >= maxOverseasPlayers) {
        alert('You have reached the maximum limit of 8 overseas players.');
        return;
    }
    if (currentPurse < player.price) {
        alert(`You don't have enough purse to buy ${player.name}. You need ₹${player.price.toFixed(2)} Cr but have ₹${currentPurse.toFixed(2)} Cr.`);
        return;
    }

    currentPurse -= player.price;
    squadCount++;
    if (player.isOverseas) {
        overseasCount++;
    }

    // Remove player from the left side
    const playerCardToRemove = document.querySelector(`.player-selection [data-id="${player.id}"]`);
    if (playerCardToRemove) {
        playerCardToRemove.remove();
    }

    // Add player to the right side (auction table)
    let targetAuctionGroup;
    switch (player.type) {
        case 'Batsman':
            targetAuctionGroup = document.getElementById('auction-batsman');
            break;
        case 'All-Rounder':
            targetAuctionGroup = document.getElementById('auction-allrounder');
            break;
        case 'Wicket-Keeper':
            targetAuctionGroup = document.getElementById('auction-wicketkeeper');
            break;
        case 'Spinner':
            targetAuctionGroup = document.getElementById('auction-spinner');
            break;
        case 'Pacer':
            targetAuctionGroup = document.getElementById('auction-pacer');
            break;
        default:
            console.warn('Unknown player type:', player.type);
            return;
    }

    if (targetAuctionGroup) {
        const playerCardInAuction = createPlayerCard(player, true);
        targetAuctionGroup.appendChild(playerCardInAuction);
        // Store in the auctionGroups data structure
        auctionGroups[`auction-${player.type.toLowerCase().replace('-', '')}`].push(player);
    }

    updatePurseDisplay();
}

function resetAuction() {
    if (!confirm('Are you sure you want to reset the auction? All selected players will be removed and your purse will be restored.')) {
        return;
    }

    currentPurse = initialPurse;
    squadCount = 0;
    overseasCount = 0;

    // Clear all auction groups
    for (const groupId in auctionGroups) {
        document.getElementById(groupId).innerHTML = '';
        auctionGroups[groupId] = []; // Clear the data array as well
    }

    // Re-initialize players to put them back on the left side
    // Deep copy players array to avoid modifying the original
    const initialPlayersState = JSON.parse(JSON.stringify(players));
    for (const subgroupId in playerSubgroups) {
        playerSubgroups[subgroupId] = []; // Clear current subgroup lists
    }
    initialPlayersState.forEach(player => {
        let subgroupId;
        switch (player.category) {
            case 'Opener':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'opener-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'opener-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'opener-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'opener-wk';
                break;
            case 'Middle Order':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'middle-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'middle-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'middle-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'middle-wk';
                break;
            case 'Finisher':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'finisher-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'finisher-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'finisher-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'finisher-wk';
                break;
            case 'Spinner':
                subgroupId = 'spinners';
                break;
            case 'Pacer':
                subgroupId = 'pacers';
                break;
        }
        if (subgroupId) {
            playerSubgroups[subgroupId].push(player);
        }
    });

    renderPlayers(); // Re-render all players in their original positions
    updatePurseDisplay();
}

// Event Listeners
elements.resetAuctionBtn.addEventListener('click', resetAuction);

// Initial load
document.addEventListener('DOMContentLoaded', initializePlayers);

*/


// new

function saveState() {
    localStorage.setItem('currentPurse', currentPurse);
    localStorage.setItem('squadCount', squadCount);
    localStorage.setItem('overseasCount', overseasCount);
    localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));
}

function loadState() {
    currentPurse = parseFloat(localStorage.getItem('currentPurse')) || initialPurse;
    squadCount = parseInt(localStorage.getItem('squadCount')) || 0;
    overseasCount = parseInt(localStorage.getItem('overseasCount')) || 0;
    selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || {};
}

function initializePlayers() {
    loadState(); // Load state at the beginning

    // Determine which players are already selected
    const selectedPlayerIds = Object.keys(selectedPlayers);

    // Populate playerSubgroups only with unselected players
    players.forEach(player => {
        if (!selectedPlayerIds.includes(player.id)) {
            let subgroupId;
            switch (player.category) {
                case 'Opener':
                    if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'opener-batsman';
                    else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'opener-pacer-ar';
                    else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'opener-spinner-ar';
                    else if (player.role.includes('Wicket-Keeper')) subgroupId = 'opener-wk';
                    break;
                case 'Middle Order':
                    if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'middle-batsman';
                    else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'middle-pacer-ar';
                    else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'middle-spinner-ar';
                    else if (player.role.includes('Wicket-Keeper')) subgroupId = 'middle-wk';
                    break;
                case 'Finisher':
                    if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'finisher-batsman';
                    else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'finisher-pacer-ar';
                    else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'finisher-spinner-ar';
                    else if (player.role.includes('Wicket-Keeper')) subgroupId = 'finisher-wk';
                    break;
                case 'Spinner':
                    subgroupId = 'spinners';
                    break;
                case 'Pacer':
                    subgroupId = 'pacers';
                    break;
            }
            if (subgroupId) {
                playerSubgroups[subgroupId].push(player);
            }
        }
    });

    renderPlayers(); // Render unselected players on the left
    renderAuctionTable(); // Render selected players on the right
    updatePurseDisplay();
}

function renderPlayers() {
    for (const subgroupId in playerSubgroups) {
        const subgroupElement = document.getElementById(subgroupId);
        if (subgroupElement) {
            // Clear existing cards, but preserve the H4 tag if it's there
            const h4Tag = subgroupElement.querySelector('h4');
            subgroupElement.innerHTML = '';
            if (h4Tag) {
                subgroupElement.appendChild(h4Tag);
            }
            playerSubgroups[subgroupId].forEach(player => {
                const playerCard = createPlayerCard(player, false);
                subgroupElement.appendChild(playerCard);
            });
        }
    }
}

// Function to render players in the auction table on the main page
function renderAuctionTable() {
    // Clear existing auction table groups
    for (const groupId in auctionGroups) {
        document.getElementById(groupId).innerHTML = '';
        auctionGroups[groupId] = [];
    }

    // Populate auction table with selected players from localStorage
    for (const playerId in selectedPlayers) {
        const player = selectedPlayers[playerId];
        let targetAuctionGroup;
        switch (player.type) {
            case 'Batsman':
                targetAuctionGroup = document.getElementById('auction-batsman');
                break;
            case 'All-Rounder':
                targetAuctionGroup = document.getElementById('auction-allrounder');
                break;
            case 'Wicket-Keeper':
                targetAuctionGroup = document.getElementById('auction-wicketkeeper');
                break;
            case 'Spinner':
                targetAuctionGroup = document.getElementById('auction-spinner');
                break;
            case 'Pacer':
                targetAuctionGroup = document.getElementById('auction-pacer');
                break;
            default:
                console.warn('Unknown player type:', player.type);
                return;
        }

        if (targetAuctionGroup) {
            const playerCardInAuction = createPlayerCard(player, true);
            targetAuctionGroup.appendChild(playerCardInAuction);
            auctionGroups[`auction-${player.type.toLowerCase().replace('-', '')}`].push(player);
        }
    }
}


function createPlayerCard(player, inAuctionTable) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.dataset.id = player.id;
    playerCard.dataset.price = player.price;
    playerCard.dataset.isOverseas = player.isOverseas;
    playerCard.dataset.type = player.type; // Store player type for auction table sorting

    if (player.isOverseas) {
        playerCard.classList.add('overseas');
    }

    playerCard.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <h4>${player.name}</h4>
        <p>${player.role}</p>
        <p class="price">₹${player.price.toFixed(2)} Cr</p>
    `;

    if (!inAuctionTable) {
        playerCard.addEventListener('click', () => addPlayerToSquad(player));
    } else {
        // For players in the auction table, you might want a "remove" functionality
        // For simplicity in this initial build, we'll just show them
    }

    return playerCard;
}

function updatePurseDisplay() {
    elements.currentPurse.textContent = currentPurse.toFixed(2);
    elements.squadCount.textContent = squadCount;
    elements.overseasCount.textContent = overseasCount;

    // Optional: Add visual feedback for purse
    if (currentPurse < 20 && currentPurse > 0) {
        elements.currentPurse.style.color = 'orange';
    } else if (currentPurse <= 0) {
        elements.currentPurse.style.color = 'red';
    } else {
        elements.currentPurse.style.color = 'white';
    }
}

function addPlayerToSquad(player) {
    if (squadCount >= maxSquadSize) {
        alert('You have reached the maximum squad size of 25 players.');
        return;
    }
    if (player.isOverseas && overseasCount >= maxOverseasPlayers) {
        alert('You have reached the maximum limit of 8 overseas players.');
        return;
    }
    if (currentPurse < player.price) {
        alert(`You don't have enough purse to buy ${player.name}. You need ₹${player.price.toFixed(2)} Cr but have ₹${currentPurse.toFixed(2)} Cr.`);
        return;
    }

    currentPurse -= player.price;
    squadCount++;
    if (player.isOverseas) {
        overseasCount++;
    }

    // Add player to selectedPlayers object
    selectedPlayers[player.id] = player;
    saveState(); // Save state after adding player

    // Remove player card from the left side (visually)
    const playerCardToRemove = document.querySelector(`.player-selection [data-id="${player.id}"]`);
    if (playerCardToRemove) {
        playerCardToRemove.remove();
        // Also remove from the playerSubgroups array to keep data consistent
        for (const subgroupId in playerSubgroups) {
            playerSubgroups[subgroupId] = playerSubgroups[subgroupId].filter(p => p.id !== player.id);
        }
    }


    // Add player to the right side (auction table visually)
    let targetAuctionGroup;
    switch (player.type) {
        case 'Batsman':
            targetAuctionGroup = document.getElementById('auction-batsman');
            break;
        case 'All-Rounder':
            targetAuctionGroup = document.getElementById('auction-allrounder');
            break;
        case 'Wicket-Keeper':
            targetAuctionGroup = document.getElementById('auction-wicketkeeper');
            break;
        case 'Spinner':
            targetAuctionGroup = document.getElementById('auction-spinner');
            break;
        case 'Pacer':
            targetAuctionGroup = document.getElementById('auction-pacer');
            break;
        default:
            console.warn('Unknown player type:', player.type);
            return;
    }

    if (targetAuctionGroup) {
        const playerCardInAuction = createPlayerCard(player, true);
        targetAuctionGroup.appendChild(playerCardInAuction);
        auctionGroups[`auction-${player.type.toLowerCase().replace('-', '')}`].push(player); // Update internal auctionGroups
    }

    updatePurseDisplay();
}

function resetAuction() {
    if (!confirm('Are you sure you want to reset the auction? All selected players will be removed and your purse will be restored.')) {
        return;
    }

    // Clear localStorage
    localStorage.clear();

    // Reset in-memory state
    currentPurse = initialPurse;
    squadCount = 0;
    overseasCount = 0;
    selectedPlayers = {};

    // Clear all auction groups visually
    for (const groupId in auctionGroups) {
        document.getElementById(groupId).innerHTML = '';
        auctionGroups[groupId] = [];
    }

    // Re-initialize players to put them back on the left side
    for (const subgroupId in playerSubgroups) {
        playerSubgroups[subgroupId] = []; // Clear current subgroup lists
    }
    players.forEach(player => { // Add all original players back to available pool
        let subgroupId;
        switch (player.category) {
            case 'Opener':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'opener-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'opener-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'opener-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'opener-wk';
                break;
            case 'Middle Order':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'middle-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'middle-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'middle-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'middle-wk';
                break;
            case 'Finisher':
                if (player.role.includes('Batsman') && player.type === 'Batsman') subgroupId = 'finisher-batsman';
                else if (player.role.includes('Pacer All-Rounder')) subgroupId = 'finisher-pacer-ar';
                else if (player.role.includes('Spinner All-Rounder')) subgroupId = 'finisher-spinner-ar';
                else if (player.role.includes('Wicket-Keeper')) subgroupId = 'finisher-wk';
                break;
            case 'Spinner':
                subgroupId = 'spinners';
                break;
            case 'Pacer':
                subgroupId = 'pacers';
                break;
        }
        if (subgroupId) {
            playerSubgroups[subgroupId].push(player);
        }
    });

    renderPlayers(); // Re-render all players in their original positions
    updatePurseDisplay();
}

// Event Listeners
elements.resetAuctionBtn.addEventListener('click', resetAuction);

// Initial load
document.addEventListener('DOMContentLoaded', initializePlayers);
