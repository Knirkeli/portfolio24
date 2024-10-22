"use client";

import * as React from "react";
import BlogPostComponent from "./blog";
import ProjectPostComponent from "./projects";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const ProjectsBlogTabs = () => {
  return (
    <Tabs
      defaultValue="projects"
      className="grid lg:w-[10/12] w-full justify-center py-4"
    >
      <TabsList className="bg-inherit">
        <TabsTrigger value="projects" className="text-lg">
          Prosjekter
        </TabsTrigger>
        <TabsTrigger value="blog" className="text-lg">
          Blog
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="pt-4">
        <ProjectPostComponent />
      </TabsContent>
      <TabsContent value="blog" className="pt-4">
        <BlogPostComponent />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectsBlogTabs;
