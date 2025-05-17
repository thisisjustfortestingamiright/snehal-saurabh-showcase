
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "optimizing-distributed-systems",
    title: "Optimizing Distributed Systems for High Throughput",
    date: "2023-04-15",
    summary: "An exploration of techniques to optimize distributed systems for handling high volumes of traffic.",
  },
  {
    id: "machine-learning-in-production",
    title: "Deploying Machine Learning Models in Production",
    date: "2023-03-10",
    summary: "Best practices and lessons learned from deploying ML models in production environments.",
  },
  {
    id: "competitive-programming-tips",
    title: "Advanced Competitive Programming: Tips and Techniques",
    date: "2023-02-22",
    summary: "Strategies and techniques that have helped me improve my competitive programming performance.",
  },
  {
    id: "microservices-architecture",
    title: "Building Resilient Microservices Architecture",
    date: "2023-01-05",
    summary: "A deep dive into designing and implementing resilient microservices architecture.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="border-b border-border pb-8 last:border-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.date}</p>
              <p className="mb-4">{post.summary}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:underline"
                onClick={(e) => e.preventDefault()} // Prevent navigation since this is a placeholder
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
