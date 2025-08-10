import { useState } from "react";
import { AuthForm } from "./components/AuthForm";
import { AppWireframe } from "./components/AppWireframe";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { FileText, LogIn } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<"auth" | "wireframe">("auth");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful travel destinations including mountains, beaches, and cityscapes"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-teal-900/70"></div>
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Top Navigation */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-white text-3xl tracking-tight">TripGo</h1>
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-300/20">
                Development Mode
              </Badge>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant={currentView === "auth" ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentView("auth")}
                className={currentView === "auth" 
                  ? "bg-white text-gray-900 hover:bg-white/90" 
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              >
                <LogIn className="w-4 h-4 mr-2" />
                Auth Page
              </Button>
              <Button
                variant={currentView === "wireframe" ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentView("wireframe")}
                className={currentView === "wireframe" 
                  ? "bg-white text-gray-900 hover:bg-white/90" 
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              >
                <FileText className="w-4 h-4 mr-2" />
                Wireframe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-8">
          {currentView === "auth" ? (
            /* Authentication Page - Version 1 */
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Branding & Welcome (Hidden on mobile) */}
                <div className="hidden lg:block space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Badge className="bg-blue-500/20 text-blue-200 border-blue-300/20 mb-4">
                        Version 1 - Current
                      </Badge>
                      <h2 className="text-white text-5xl xl:text-6xl tracking-tight">
                        Authentication
                      </h2>
                    </div>
                    <p className="text-white/80 text-xl xl:text-2xl leading-relaxed">
                      Discover breathtaking destinations, create unforgettable itineraries, 
                      and connect with authentic local experiences around the world.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-white/70">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-white">Discover Places</h3>
                      <p className="text-sm">Find hidden gems and popular destinations</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-white">Plan Itineraries</h3>
                      <p className="text-sm">Create detailed travel plans effortlessly</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <h3 className="text-white">Local Experiences</h3>
                      <p className="text-sm">Connect with locals and authentic culture</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <h3 className="text-white">Share & Inspire</h3>
                      <p className="text-sm">Share your adventures with fellow travelers</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Authentication Form */}
                <div className="flex items-center justify-center">
                  <AuthForm />
                </div>
              </div>
            </div>
          ) : (
            /* Wireframe View - App Structure */
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <Badge className="bg-green-500/20 text-green-200 border-green-300/20">
                  App Structure Overview
                </Badge>
                <h2 className="text-white text-3xl lg:text-4xl">
                  TripGo Application Wireframe
                </h2>
                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                  Visual blueprint showing how the authentication system connects to the main dashboard, 
                  creating a seamless travel planning experience.
                </p>
              </div>
              
              <AppWireframe />
            </div>
          )}
        </div>

        {/* Mobile Brand Header - Only show on auth view */}
        {currentView === "auth" && (
          <div className="lg:hidden absolute top-8 left-4 z-20">
            <h1 className="text-white text-3xl tracking-tight">TripGo</h1>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}