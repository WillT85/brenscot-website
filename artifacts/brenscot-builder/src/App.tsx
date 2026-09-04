import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProjectsPage from "@/pages/projects";
import ProjectDetailPage from "@/pages/project-detail";
import AboutPage from "@/pages/about";
import PartnersPage from "@/pages/partners";
import ContactPage from "@/pages/contact";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";

const queryClient = new QueryClient();

function RouteEffects() {
  const [location] = useLocation();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (id) {
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
    return undefined;
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <RouteEffects />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/projects/:slug" component={ProjectDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/privacy-policy" component={PrivacyPage} />
        <Route path="/terms-conditions" component={TermsPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
