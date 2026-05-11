import { Switch, Route, Router as WouterRouter } from "wouter";

import Home from "@/pages/Home";
import OurStory from "@/pages/OurStory";
import Portfolio from "@/pages/Portfolio";
import ProjectDetail from "@/pages/ProjectDetail";
import Community from "@/pages/Community";
import OurPeople from "@/pages/OurPeople";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={ProjectDetail} />
      <Route path="/community" component={Community} />
      <Route path="/our-people" component={OurPeople} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-conditions" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
