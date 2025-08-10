import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowRight, 
  User, 
  Search, 
  MapPin, 
  Camera, 
  Hotel, 
  Plane, 
  Map, 
  BookOpen,
  Home,
  LogIn
} from "lucide-react";
import { motion } from "motion/react";

export function AppWireframe() {
  const wireframePages = [
    {
      id: "auth",
      title: "Authentication Page",
      subtitle: "Version 1 - Current",
      status: "completed",
      features: [
        "OAuth Login (Google, Facebook, GitHub)",
        "Email/Password Authentication", 
        "Sign Up / Sign In Toggle",
        "Responsive Design",
        "Brand Consistency"
      ],
      icon: <LogIn className="w-6 h-6" />,
      color: "blue"
    },
    {
      id: "home",
      title: "Home Dashboard",
      subtitle: "Version 2 - Next",
      status: "planned",
      features: [
        "Hero Search Bar",
        "Location Overview",
        "YouTube Video Carousel",
        "Image Gallery",
        "Hotels Section",
        "Travel Details",
        "Nearby Spots & Hidden Gems",
        "Travel Guide Downloads"
      ],
      icon: <Home className="w-6 h-6" />,
      color: "green"
    }
  ];

  const userFlow = [
    {
      step: 1,
      title: "User Landing",
      description: "User visits TripGo app",
      page: "Authentication Page"
    },
    {
      step: 2,
      title: "Authentication",
      description: "Sign in/up via OAuth or email",
      page: "Authentication Form"
    },
    {
      step: 3,
      title: "Dashboard Access",
      description: "Successful authentication redirects to home",
      page: "Home Dashboard"
    },
    {
      step: 4,
      title: "Travel Planning",
      description: "Search destinations and plan trips",
      page: "Planning Features"
    }
  ];

  const futurePages = [
    {
      title: "Destination Detail",
      description: "Deep dive into specific locations",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: "Itinerary Builder",
      description: "Create custom travel plans",
      icon: <Map className="w-5 h-5" />
    },
    {
      title: "Booking Integration",
      description: "Hotel and flight reservations",
      icon: <Hotel className="w-5 h-5" />
    },
    {
      title: "User Profile",
      description: "Personal travel preferences",
      icon: <User className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-blue-500/20 text-blue-200 border-blue-300/20";
      case "planned":
        return "bg-green-500/20 text-green-200 border-green-300/20";
      default:
        return "bg-gray-500/20 text-gray-200 border-gray-300/20";
    }
  };

  return (
    <div className="space-y-8">
      {/* App Structure Overview */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Search className="w-6 h-6 text-blue-300" />
            </div>
            TripGo App Wireframe & Structure
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Current vs Planned Pages */}
          <div className="grid lg:grid-cols-2 gap-6">
            {wireframePages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${page.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'}`}>
                          {page.icon}
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{page.title}</CardTitle>
                          <p className="text-white/60 text-sm">{page.subtitle}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(page.status)}>
                        {page.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {page.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-white/80 text-sm">
                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Connection Flow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-white/60" />
          </div>
        </CardContent>
      </Card>

      {/* User Journey Flow */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">User Journey Flow</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {userFlow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="bg-white/5 border-white/10 text-center">
                  <CardContent className="p-4 space-y-3">
                    <div className="w-8 h-8 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center text-blue-200">
                      {step.step}
                    </div>
                    <h4 className="text-white">{step.title}</h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                    <Badge variant="outline" className="bg-white/5 border-white/20 text-white/80">
                      {step.page}
                    </Badge>
                  </CardContent>
                </Card>
                
                {index < userFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-white/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Page Components Breakdown */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Version 1 Components */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Version 1 - Authentication Components
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h5 className="text-white/90">AuthForm.tsx</h5>
              <p className="text-white/70 text-sm">Main authentication form with email/password and OAuth options</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white/90">OAuthButtons.tsx</h5>
              <p className="text-white/70 text-sm">Social login buttons for Google, Facebook, GitHub</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white/90">App.tsx</h5>
              <p className="text-white/70 text-sm">Main layout with background, branding, and form container</p>
            </div>
          </CardContent>
        </Card>

        {/* Version 2 Components */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Version 2 - Home Dashboard Components
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h5 className="text-white/90">Header.tsx</h5>
              <p className="text-white/70 text-sm">Navigation header with logo and user account</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white/90">HeroSearch.tsx</h5>
              <p className="text-white/70 text-sm">Prominent search bar for destination queries</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white/90">LocationOverview.tsx</h5>
              <p className="text-white/70 text-sm">AI-generated destination information and details</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white/90">+ 6 More Components</h5>
              <p className="text-white/70 text-sm">Videos, gallery, hotels, travel details, spots, guides</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Future Expansion */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white text-xl">Future App Expansion</CardTitle>
          <p className="text-white/70">Planned features and pages for comprehensive travel platform</p>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {futurePages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <CardContent className="p-4 space-y-3">
                    <div className="w-10 h-10 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center text-purple-200">
                      {page.icon}
                    </div>
                    <h4 className="text-white text-sm">{page.title}</h4>
                    <p className="text-white/60 text-xs">{page.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Plan */}
      <Card className="bg-white/5 backdrop-blur-md border-white/10">
        <CardContent className="p-6 text-center space-y-4">
          <h3 className="text-white text-xl">Ready to Connect Versions?</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            This wireframe shows how the authentication page (Version 1) seamlessly connects to the home dashboard (Version 2), 
            creating a complete travel planning experience with consistent design language and user flow.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Implement Version 2
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Component Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}