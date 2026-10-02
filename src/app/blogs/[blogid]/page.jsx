import React from 'react';
const blogsArray = [
  {
    id: 1,
    title: 'How to Choose the Right Battery for Your Vehicle',
    slug: 'how-to-choose-the-right-battery-for-your-vehicle',
    excerpt:
      'Choosing the right battery is important for reliable starting performance and long-term vehicle health.',
    content:
      "A good battery ensures reliable engine starting and stable electrical performance. Before buying a battery, check the vehicle manufacturer's recommended battery size, voltage, capacity and terminal configuration. You should also consider the vehicle type, driving habits and climate. Regular inspection and proper maintenance can help extend battery life.",
    category: 'Battery Guide',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-guide.jpg',
    tags: ['Battery', 'Vehicle', 'Maintenance', 'Buying Guide'],
    publishedAt: '2026-09-01',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '5 Signs That Your Car Battery Needs Replacement',
    slug: '5-signs-your-car-battery-needs-replacement',
    excerpt:
      'Learn the common warning signs that indicate your car battery may need to be replaced.',
    content:
      'Slow engine cranking, dim headlights, frequent jump-starts, battery warning lights and an old battery are common signs of battery problems. If you notice these symptoms, inspect the battery and charging system as soon as possible. Replacing a weak battery at the right time can help prevent unexpected breakdowns.',
    category: 'Battery Tips',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-warning-signs.jpg',
    tags: ['Car Battery', 'Battery Problems', 'Maintenance', 'Car Tips'],
    publishedAt: '2026-09-05',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'How to Maintain Your Car Battery Properly',
    slug: 'how-to-maintain-your-car-battery-properly',
    excerpt:
      'Simple battery maintenance habits can improve performance and help your battery last longer.',
    content:
      'Keeping the battery terminals clean, checking for corrosion and ensuring the battery is securely mounted are important maintenance steps. Avoid leaving electrical accessories running when the engine is off for long periods. Regularly checking the charging system can also help identify problems before they become serious.',
    category: 'Maintenance',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-maintenance.jpg',
    tags: ['Battery Maintenance', 'Car Care', 'Battery Life'],
    publishedAt: '2026-09-08',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: "Car Battery vs Motorcycle Battery: What's the Difference?",
    slug: 'car-battery-vs-motorcycle-battery',
    excerpt:
      'Understand the key differences between car batteries and motorcycle batteries before making a purchase.',
    content:
      "Car and motorcycle batteries may look similar, but their specifications and applications are different. Cars generally require batteries with higher starting capacity, while motorcycle batteries are designed for smaller electrical systems and limited space. Always select a battery according to your vehicle's recommended specifications.",
    category: 'Battery Guide',
    author: 'SHIMUL VAI',
    image: '/images/blog/car-vs-motorcycle-battery.jpg',
    tags: ['Car Battery', 'Motorcycle Battery', 'Comparison'],
    publishedAt: '2026-09-12',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Why Does a Car Battery Lose Charge?',
    slug: 'why-does-a-car-battery-lose-charge',
    excerpt:
      'There are several reasons why a vehicle battery may repeatedly lose its charge.',
    content:
      'A battery can lose charge because of an aging battery, parasitic electrical drain, a faulty alternator, loose connections or leaving lights and accessories switched on. If the battery repeatedly becomes weak, simply charging it may not solve the underlying problem. A professional inspection can help identify the actual cause.',
    category: 'Troubleshooting',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-drain.jpg',
    tags: ['Battery Drain', 'Alternator', 'Troubleshooting', 'Car Care'],
    publishedAt: '2026-09-15',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'How Long Does a Car Battery Usually Last?',
    slug: 'how-long-does-a-car-battery-usually-last',
    excerpt:
      "Battery lifespan depends on usage, climate, maintenance and the condition of the vehicle's charging system.",
    content:
      'The lifespan of a car battery varies depending on driving conditions, climate, maintenance and charging-system performance. Frequent short trips, extreme temperatures and electrical problems can affect battery performance. Regular inspection and proper vehicle maintenance can help you get the most from your battery.',
    category: 'Battery Knowledge',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-life.jpg',
    tags: ['Battery Life', 'Car Battery', 'Vehicle Maintenance'],
    publishedAt: '2026-09-18',
    readTime: '4 min read',
  },
  {
    id: 7,
    title: 'What Is a Maintenance-Free Battery?',
    slug: 'what-is-a-maintenance-free-battery',
    excerpt:
      'Learn what maintenance-free batteries are and how they differ from traditional battery designs.',
    content:
      "Maintenance-free batteries are designed to require very little routine electrolyte maintenance during normal use. They are convenient for modern vehicles and are widely used because of their ease of use. However, maintenance-free does not mean completely maintenance-free. The vehicle's charging system, terminals and overall electrical condition should still be checked regularly.",
    category: 'Battery Knowledge',
    author: 'SHIMUL VAI',
    image: '/images/blog/maintenance-free-battery.jpg',
    tags: ['Maintenance Free', 'Battery', 'Car Battery'],
    publishedAt: '2026-09-20',
    readTime: '5 min read',
  },
  {
    id: 8,
    title: 'How to Check Your Battery Before a Long Road Trip',
    slug: 'how-to-check-your-battery-before-a-long-road-trip',
    excerpt:
      'A quick battery inspection before a long journey can help reduce the risk of unexpected problems.',
    content:
      'Before a long road trip, inspect the battery terminals, check for visible damage or corrosion and make sure the battery is firmly secured. If possible, have the battery and charging system tested. Checking the battery before traveling is especially useful if the battery is already several years old or has recently shown signs of weakness.',
    category: 'Travel & Car Care',
    author: 'SHIMUL VAI',
    image: '/images/blog/road-trip-battery-check.jpg',
    tags: ['Road Trip', 'Battery Check', 'Car Care', 'Travel'],
    publishedAt: '2026-09-23',
    readTime: '4 min read',
  },
  {
    id: 9,
    title: 'Common Battery Mistakes You Should Avoid',
    slug: 'common-battery-mistakes-you-should-avoid',
    excerpt:
      'Avoid these common mistakes to protect your vehicle battery and electrical system.',
    content:
      'Using the wrong battery specification, ignoring corrosion, leaving lights on, installing a loose battery and ignoring repeated starting problems are common mistakes. Another mistake is replacing a battery without checking the alternator and charging system. Understanding these issues can help prevent unnecessary battery problems.',
    category: 'Battery Tips',
    author: 'SHIMUL VAI',
    image: '/images/blog/battery-mistakes.jpg',
    tags: ['Battery Tips', 'Car Care', 'Maintenance', 'Common Mistakes'],
    publishedAt: '2026-09-26',
    readTime: '5 min read',
  },
  {
    id: 10,
    title: 'Why Choosing a Quality Battery Matters',
    slug: 'why-choosing-a-quality-battery-matters',
    excerpt:
      'A quality battery can provide dependable starting performance and better reliability for your vehicle.',
    content:
      'A vehicle battery plays an important role in starting the engine and supporting electrical components. Choosing a battery with the correct specifications and reliable build quality can improve consistency and reduce the risk of premature failure. Always purchase from a trusted seller and make sure the battery is suitable for your specific vehicle.',
    category: 'Buying Guide',
    author: 'SHIMUL VAI',
    image: '/images/blog/quality-battery.jpg',
    tags: ['Quality Battery', 'Buying Guide', 'Vehicle', 'Battery'],
    publishedAt: '2026-09-30',
    readTime: '5 min read',
  },
];
const BlogDetailsPage = async ({ params }) => {
  const { blogid } = await params;

  const blog = blogsArray.find((blog) => blog.id === parseInt(blogid));

  //   console.log('Blog ID:', blogid);
  console.log('Blog:', blog);

  return (
    <div>
      <h1>This is dynamic page </h1>
      <h4 className='text-4xl'>{blog?.title}</h4>
    </div>
  );
};

export default BlogDetailsPage;
