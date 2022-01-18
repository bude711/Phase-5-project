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
c1=Company.create(name: "Netflix", edi_statement: "Netflix’s greatest impact is in storytelling. Stories like 13th, Disclosure, Selena, Da 5 Bloods, Special and The Half of It broaden representation, empathy and understanding. We create and connect these stories to people all around the globe - removing the barriers of language, device, ability or connectivity. Better representation on-screen starts with representation in the office. Our work has to be internal first, so it can impact what we do externally. We believe we’ll do that better if our employees come from different backgrounds, and if we create an environment of inclusion and belonging for them.", bipoc_info:"48% white, 24% Asian, 7% Hispanic/Latinx, 6% Black/African American, 5% Two or more races, 0.6% Middle Easter or North African, 0.5% Native Hawaiian or other Pacific Islander, 0.2% American Indian or Alaska Native, 9% Not disclosed, 6% Other/multiple ", gender_info: "47.9% Female, 43.8% Male, 1.3% additional gender identity", lgbtqia_info: "N/A" , disability_info: "N/A", location: "Los Gatos, California", website: "Netflix.com", size:"Approx. 9,400 full-time workers" , networth:"$289.09 billion")

c2=Company.create(name: "Google", edi_statement:"Google is committed to continuing to make diversity, equity, and inclusion part of everything we do—from how we build our products to how we build our workforce. Google is growing to fulfill that vision. In the past few years, we’ve doubled in size—today, we have more than 100,000 employees in 170 cities spanning nearly 60 countries. Operating at this scale brings an elevated level of responsibility to everything we do—including a workforce that's more representative of our users, and a workplace that creates a sense of belonging for everyone.", bipoc_info:"50.4% White, 42.3% Asian, 4.4% Black, 6.4% Latinx, 0.8% Native American ", gender_info:"32.2% Woman, 67.8% Men ", lgbtqia_info: "6.9% LGBQ+ and/or Trans+, <1% Non-binary", disability_info: "5.6% identfy as having a disability", location: "Mountain View, California", website: "https://about.google", size: "135,301 full-time employees", networth: "$1210 Billion")

c3=Company.create(name: "IBM", edi_statement: "IBM thinks about diversity the way we think about innovation—both are essential to the success of our business. When we innovate, technology becomes smarter for clients and creates new opportunities for growth. When we incorporate diversity into our business, we create better innovations and outcomes. IBM has embraced diversity, and it gives opportunities for IBMers and our clients to achieve their full potential.", bipoc_info:"18.9% Pan-Asian, 0.7% Multi-race, 13.7% Underrepresented minorities, 6.9% Black, 6.3% Hispanic, 0.3% Native American", gender_info: "33.9% Women", lgbtqia_info: "N/A", disability_info: "N/A", location: "Armonk, New York" , website: "IBM.com", size: "350,000 full-time employees", networth:"$20.73 Billion")

c4=Company.create(name: "Apple", edi_statement:"Across Apple, we’ve strengthened our long-standing commitment to making our company more inclusive and the world more just. Where every great idea can be heard. And everybody belongs.", bipoc_info:"27% Asian, 9% Black, 14% Hispanic/Latinx, 1% Indigenous, 3% Multiracial, 47% White", gender_info:"34% Female, 66% Male", lgbtqia_info: "N/A", disability_info:"N/A", location: "Cupertine, California", website: "apple.com", size: "147,000 full-time staff", networth:"$2948 Billion")

c5=Company.create(name: "Microsoft", edi_statement: "Our mission is deeply inclusive: empower every person and every organization on the planet to achieve more. We expect each of us—no matter what our level, role or function is—to play an active role in creating environments where people of a diverse range of backgrounds are excited to bring all of who they are and do their best work." ,bipoc_info:"4.9% Black or African American, 6.6% Hispanic and Latinx, 0.7% Native American, Alaska Native, and Pacific Islander, 34.7% Asian ", gender_info:"28.6% women", lgbtqia_info: "N/A", disability_info:"6.1% identify as having a disability", location: "Redmond, WA", website: "microsoft.com", size: "181,000 full-time employees", networth:"$141.988 billion")

puts "seeding reviews..."
r1=Review.create(rating: 5, comment:"Worked here for 2 years and had a great time." , user_id: u1.id, company_id:c1.id)
r2=Review.create(rating: 4, comment: "The company is pretty great. Lots of diversity initiatives.", user_id: u1.id, company_id:c2.id)
r3=Review.create(rating: 3, comment: "I had an okay time working here. Not a lot of represenation especially for such a large company.", user_id: u1.id, company_id:c3.id)


puts "done seeding"