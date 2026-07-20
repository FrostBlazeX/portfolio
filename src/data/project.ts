export interface Project {
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  slug: string;
  year: number;
  category: ProjectCategory;
  highlights: string[];
  challenges: string[];
  features: string[];
}

export type ProjectCategory =
  | "E-commerce"
  | "CMS"
  | "API Project"
  | "Landing Page"
  | "Travel"
  | "Clone";

export const projects: Project[] = (
  [
    {
      name: "Storefront",
      slug: "store-front",
      description: "We are changing the way people shop.",
      longDescription:
        "A furniture e-commerce application built with modern frontend technologies, featuring product browsing, responsive layouts, and a scalable component architecture.",
      techStack: ["HTML", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/FrostBlazeX/f-nextjs-store-draft",
      liveUrl: "https://f-nextjs-store-draft.vercel.app/",
      featured: true,
      image: "/projects/store-front.jpg",
      year: 2026,
      category: "E-commerce",
      highlights: [
        "Responsive e-commerce storefront",
        "Product browsing and search",
        "Reusable UI components",
        "TypeScript integration",
        "Scalable product data structure",
      ],
      features: [
        "Browse furniture collections",
        "Product search functionality",
        "Responsive storefront design",
      ],
      challenges: [
        "TypeScript integration",
        "Scalable component architecture",
        "E-commerce data handling",
      ],
    },
    {
      name: "ComfyStore",
      slug: "comfy-store",
      description: "Shop for household furniture.",
      longDescription:
        "A furniture e-commerce application built with modern frontend technologies, featuring product browsing, responsive layouts, and a scalable component architecture.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/Comfy-Store",
      liveUrl: "https://comfys.netlify.app/",
      featured: true,
      image: "/projects/comfy-store.jpg",
      year: 2026,
      category: "E-commerce",
      highlights: [
        "Responsive furniture storefront",
        "Product search and filtering",
        "Reusable component architecture",
        "Efficient product data handling",
        "Cross-device shopping experience",
      ],
      features: [
        "Browse furniture products",
        "Search and filter items",
        "Responsive shopping interface",
      ],
      challenges: [
        "Product data management",
        "Reusable component architecture",
        "Responsive e-commerce layouts",
      ],
    },

    {
      name: "Unsplash Images",
      slug: "unsplash-images",
      description: "Search images and get unsplash images result",
      longDescription:
        "A website that sources images from unsplash API and renders them when the user searches corresponding text. Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. It allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/temp-vite-imagesf",
      liveUrl: "https://f-image-search.netlify.app/",
      featured: false,
      image: "/projects/unsplash-images.jpg",
      year: 2025,
      category: "API Project",
      highlights: [
        "High-quality image search functionality",
        "Infinite scrolling image experience",
        "REST API integration",
        "Optimized lazy loading and pagination",
        "Responsive image gallery design",
      ],
      features: [
        "Search high-quality images",
        "Infinite image loading",
        "Responsive image gallery",
      ],
      challenges: [
        "REST API integration",
        "Pagination and lazy loading",
        "Efficient state management",
      ],
    },
    {
      name: "Contentful CMS",
      slug: "contentful-cms",
      description: " Website with links to web projects(web page projects)",
      longDescription:
        "A headless CMS is a back-end only content management system that provides content creators with an intuitive interface for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. This approach allows for greater flexibility and scalability, as the content can be easily distributed to multiple channels and devices, without being limited by the constraints of a particular front-end system",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/f-contentful-app",
      liveUrl: "https://f-contentful-app.netlify.app/",
      featured: false,
      image: "/projects/Contentful-CMS.jpg",
      year: 2025,
      category: "CMS",
      highlights: [
        "Dynamic project listing experience",
        "Headless CMS integration",
        "CMS-powered project details",
        "Asynchronous content fetching",
        "Scalable content architecture",
      ],
      features: [
        "Browse project listings",
        "Fetch CMS content",
        "View project details",
      ],
      challenges: [
        "Headless CMS integration",
        "Dynamic content rendering",
        "Asynchronous API requests",
      ],
    },

    {
      name: "MixMaster",
      slug: "mix-master",
      description: "Website for searching drinks mixes",
      longDescription:
        "A web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/f-MixMaster",
      liveUrl: "https://f-mixmaster.netlify.app/",
      featured: false,
      image: "/projects/MixMaster.jpg",
      year: 2025,
      category: "API Project",
      highlights: [
        "Cocktail recipe search functionality",
        "REST API integration",
        "Dynamic drink detail pages",
        "Asynchronous data handling",
        "Interactive recipe browsing experience",
      ],
      features: [
        "Search drink recipes",
        "View cocktail details",
        "Dynamic content updates",
      ],
      challenges: [
        "REST API integration",
        "DOM manipulation",
        "Asynchronous data fetching",
      ],
    },
    {
      name: "Forkify",
      slug: "forkify-project",
      description: "Search over 1,000,000 recipes and ingredients.",
      longDescription:
        "Recipe application with custom recipe uploads. Search over 1,000,000 recipes and ingredients",
      techStack: ["HTML", "SCSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/forkify-frost",
      liveUrl: "https://forkify-frost.vercel.app/",
      featured: true,
      image: "/projects/forkify.jpg",
      year: 2025,
      category: "API Project",
      highlights: [
        "Recipe search functionality",
        "Recipe bookmarking system",
        "Custom recipe uploads",
        "API integration",
        "Responsive recipe interface",
      ],
      features: ["Search recipes", "Save bookmarks", "Upload custom recipes"],
      challenges: ["State management", "API integration", "Responsive layouts"],
    },
    {
      name: "F-Backroads App",
      slug: "backroads-app",
      description: "Backroads website for tours and travel services.",
      longDescription:
        "A website for travel that list travel services for tours for the interested user. ",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/FrostBlazeX/f-backroads-app",
      liveUrl: "https://backroads-app.netlify.app/",
      featured: false,
      image: "/projects/BackRoads-App.jpg",
      year: 2025,
      category: "Travel",
      highlights: [
        "Travel destination browsing experience",
        "Tour package exploration",
        "Interactive navigation features",
        "REST API integration",
        "Responsive travel interface",
      ],
      features: [
        "Browse travel destinations",
        "Explore tour packages",
        "Interactive navigation",
      ],
      challenges: [
        "Responsive page layouts",
        "JavaScript interactivity",
        "REST API integration",
      ],
    },

    {
      name: "Paystack Clone",
      slug: "paystack-clone",
      description: "Paystack clone website project",
      longDescription:
        "A clone website created to test the author's HTML and CSS skills",
      techStack: ["HTML", "CSS"],
      githubUrl: "https://github.com/FrostBlazeX/Paystack",
      liveUrl: "https://paystackf.netlify.app/",
      featured: false,
      image: "/projects/Paystackf.jpg",
      year: 2025,
      category: "Clone",
      highlights: [
        "Responsive payment landing page",
        "Paystack-inspired UI recreation",
        "Mobile-friendly navigation",
        "Pixel-perfect interface styling",
        "Advanced CSS layout techniques",
      ],
      features: [
        "Responsive homepage layout",
        "Recreated Paystack interface",
        "Mobile-friendly navigation",
      ],
      challenges: [
        "Pixel-perfect UI replication",
        "Responsive layout techniques",
        "Complex CSS styling",
      ],
    },
    {
      name: "MFRFP",
      slug: "amazon-bestseller",
      description: "Three Amazon best sellers.",
      longDescription: "A webpage showcasing three Amazon best-selling books.",
      techStack: ["HTML", "CSS"],
      githubUrl: "",
      liveUrl: "https://mfrfp.netlify.app",
      featured: false,
      image: "/projects/mfrfp.jpg",
      year: 2024,
      category: "Landing Page",
      highlights: [
        "Responsive bookstore landing page",
        "Bestselling book showcase",
        "Clean product card design",
        "Semantic HTML implementation",
        "Consistent responsive styling",
      ],
      features: [
        "Showcase bestselling books",
        "Clean product card layout",
        "Responsive landing page",
      ],
      challenges: [
        "Semantic HTML structure",
        "Responsive CSS design",
        "Visual layout consistency",
      ],
    },
  ] satisfies Project[]
).sort((a, b) => {
  if (a.featured !== b.featured) {
    return Number(b.featured) - Number(a.featured);
  }

  return b.year - a.year;
});

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
