# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Company.destroy_all
Review.destroy_all


puts "seeds destroyed"

puts "seeding users..."
u1 = User.create(first_name: 'Brandi', last_name: 'Ude', username:"bude123", email: "bude@gmail.com", password_digest: BCrypt::Password.create('brandi01'))

puts "seeds companies..."
c1=Company.create(name: "Netflix", img_url:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fnetflixlife.com%2Ffiles%2Fimage-exchange%2F2018%2F08%2Fie_53292-1.jpeg", edi_statement: "Netflix’s greatest impact is in storytelling. Stories like 13th, Disclosure, Selena, Da 5 Bloods, Special and The Half of It broaden representation, empathy and understanding. We create and connect these stories to people all around the globe - removing the barriers of language, device, ability or connectivity. Better representation on-screen starts with representation in the office. Our work has to be internal first, so it can impact what we do externally. We believe we’ll do that better if our employees come from different backgrounds, and if we create an environment of inclusion and belonging for them.", bipoc_info:"48% white, 24% Asian, 7% Hispanic/Latinx, 6% Black/African American, 5% Two or more races, 0.6% Middle Easter or North African, 0.5% Native Hawaiian or other Pacific Islander, 0.2% American Indian or Alaska Native, 9% Not disclosed, 6% Other/multiple ", gender_info: "47.9% Female, 43.8% Male, 1.3% additional gender identity", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Los Gatos, California", website: "Netflix.com", size:"Approx. 9,400 full-time workers" , networth:"$289.09 billion")

c2=Company.create(name: "Google", img_url: "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg", edi_statement:"Google is committed to continuing to make diversity, equity, and inclusion part of everything we do—from how we build our products to how we build our workforce. Google is growing to fulfill that vision. In the past few years, we’ve doubled in size—today, we have more than 100,000 employees in 170 cities spanning nearly 60 countries. Operating at this scale brings an elevated level of responsibility to everything we do—including a workforce that's more representative of our users, and a workplace that creates a sense of belonging for everyone.", bipoc_info:"50.4% White, 42.3% Asian, 4.4% Black, 6.4% Latinx, 0.8% Native American ", gender_info:"32.2% Woman, 67.8% Men ", lgbtqia_info: "6.9% LGBQ+ and/or Trans+, <1% Non-binary", disability_info: "5.6% identfy as having a disability", location: "Mountain View, California", website: "https://about.google", size: "135,301 full-time employees", networth: "$1210 Billion")

c3=Company.create(name: "IBM", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/IBM_logo_in.jpg/1200px-IBM_logo_in.jpg", edi_statement: "IBM thinks about diversity the way we think about innovation—both are essential to the success of our business. When we innovate, technology becomes smarter for clients and creates new opportunities for growth. When we incorporate diversity into our business, we create better innovations and outcomes. IBM has embraced diversity, and it gives opportunities for IBMers and our clients to achieve their full potential.", bipoc_info:"18.9% Pan-Asian, 0.7% Multi-race, 13.7% Underrepresented minorities, 6.9% Black, 6.3% Hispanic, 0.3% Native American", gender_info: "33.9% Women", lgbtqia_info: "N/A", disability_info: "N/A", location: "Armonk, New York" , website: "IBM.com", size: "350,000 full-time employees", networth:"$20.73 Billion")

c4=Company.create(name: "Apple", img_url: "https://1000logos.net/wp-content/uploads/2016/10/Apple-logo.jpg", edi_statement:"Across Apple, we’ve strengthened our long-standing commitment to making our company more inclusive and the world more just. Where every great idea can be heard. And everybody belongs.", bipoc_info:"27% Asian, 9% Black, 14% Hispanic/Latinx, 1% Indigenous, 3% Multiracial, 47% White", gender_info:"34% Female, 66% Male", lgbtqia_info: "N/A", disability_info:"N/A", location: "Cupertine, California", website: "apple.com", size: "147,000 full-time staff", networth:"$2948 Billion")

c5=Company.create(name: "Microsoft", img_url: "https://www.zdnet.com/a/img/resize/603f25543fc9ca75884bb638781f51f1f31c35f0/2014/08/27/0d77a99a-2da9-11e4-9e6a-00505685119a/microsofts-logo-gets-a-makeover.jpg?auto=webp&width=1092", edi_statement: "Our mission is deeply inclusive: empower every person and every organization on the planet to achieve more. We expect each of us—no matter what our level, role or function is—to play an active role in creating environments where people of a diverse range of backgrounds are excited to bring all of who they are and do their best work." ,bipoc_info:"4.9% Black or African American, 6.6% Hispanic and Latinx, 0.7% Native American, Alaska Native, and Pacific Islander, 34.7% Asian ", gender_info:"28.6% women", lgbtqia_info: "N/A", disability_info:"6.1% identify as having a disability", location: "Redmond, WA", website: "microsoft.com", size: "181,000 full-time employees", networth:"$141.988 billion")




c6=Company.create(name: "Intel", img_url:"https://upload.wikimedia.org/wikipedia/commons/2/25/Intel_logo_%282006-2020%29.jpg", edi_statement: "At Intel, we are committed to advancing diversity and inclusion at every level in our company and the broader industry. It is foundational to our business and purpose - to create world-changing technology that enriches the lives of every person on earth. ", bipoc_info:"45.8% White, 37.6% Asian, 10.5% Hispanic/Latinx, 4.9% African American, 0.8% Native American, 0.4% Pacific Islander. ", gender_info: "26.3% Women, 73.7% Men", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Santa Clara, California", website: "Intel.com", size:"110,600 full-time employees" , networth:"$213 Billion")

c7=Company.create(name: "Sony", img_url:"https://logodix.com/logo/329064.jpg", edi_statement: "It is in Sony's DNA - and a source of our innovation - to value different perspectives and backgrounds as we conduct our business activities globally and rise to new challenges. Sony promotes diversity across the Sony Group as a key management strategy by ensuring an inclusive work environment and by recruiting, hiring, training and promoting employees from diverse backgrounds.", bipoc_info:" 49.2% ethnic minorities", gender_info: "33.3% female", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Minato City, Tokyo, Japan", website: "sony.com", size:"Approx. 111,700 full-time employees" , networth:"$10.77 Billion")
   
c8=Company.create(name: "Amazon", img_url:"https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg", edi_statement: "We are a company of builders who bring varying backgrounds, ideas, and points of view to inventing on behalf of our customers. Our diverse perspectives come from many sources including gender, race, age, national origin, sexual orientation, culture, education, and professional and life experience. We are committed to diversity and inclusion and always look for ways to scale our impact as we grow.", bipoc_info:"32.1% White, 13.6% Asian, 26.5% Black, 22.8% Latinx, 3.6% Multiracial, 1.5% Native American ", gender_info: "55.4% Men, 44.6% Women", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Seattle, WA", website: "amazon.com", size:"Approx 798,000 full-time employees" , networth:"$1.65 Trillion")
       
c9=Company.create(name: "Dell", img_url:"https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-2016-present.jpg", edi_statement: "At Dell, we create opportunities for all employees to bring their ideas to the workplace in an environment that cultivates the exchange of broad thinking and inspires innovation. By embedding diversity and inclusion into our business, we help ensure that we serve customers globally in ways that best meet their needs. ", bipoc_info:"8.9% Hispanic or Latino, 5.3% Black or African American ", gender_info: "31.8% Women", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Round Rock, TX", website: "dell.com", size:"Approx. 165,000 full-time employees" , networth:"58.6 Billion")


puts "seeding reviews..."
r1=Review.create(rating: 5, comment:"Worked here for 2 years and had a great time." , user_id: u1.id, company_id:c1.id)
r2=Review.create(rating: 4, comment: "The company is pretty great. Lots of diversity initiatives.", user_id: u1.id, company_id:c2.id)
r3=Review.create(rating: 3, comment: "I had an okay time working here. Not a lot of represenation especially for such a large company.", user_id: u1.id, company_id:c3.id)


puts "done seeding"