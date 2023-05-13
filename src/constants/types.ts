export interface IProject {
    title: string;
    description: string;
    image: string,
    link: string;
    github: string;
    tags: string[];
}

export interface ProjectProps {
    project: IProject;
}