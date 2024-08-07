import type { Icon } from "lucide-svelte";
import type { ComponentType } from "svelte";

import { GraduationCap } from 'lucide-svelte';
import { NotebookPen } from 'lucide-svelte';
import { LayoutDashboard } from 'lucide-svelte';
import { MessagesSquare } from 'lucide-svelte';
import { School } from 'lucide-svelte';
import { Calendar } from 'lucide-svelte';
import { GitFork } from 'lucide-svelte';
import { Blocks } from 'lucide-svelte';
import { Bell } from 'lucide-svelte';
import { CircleUserRound } from 'lucide-svelte';
import { Settings } from 'lucide-svelte';

export type Route = {
	title: string;
	icon: ComponentType<Icon>;
	variant: "default" | "ghost";
    disabled: boolean;
};

export const primaryRoutes: Route[] = [
    { title: 'Learning', icon: GraduationCap, variant: "default", disabled: false },
    { title: 'Dashboard', icon: LayoutDashboard, variant: "ghost", disabled: false },
    { title: 'Notebook', icon: NotebookPen, variant: "ghost", disabled: false },
    { title: 'Messages', icon: MessagesSquare, variant: "ghost", disabled: false },
    { title: 'Classroom', icon: School, variant: "ghost", disabled: false },
    { title: 'Calendar', icon: Calendar, variant: "ghost", disabled: false },
    { title: 'Knowledge graph', icon: GitFork, variant: "ghost", disabled: false },
    { title: 'Extensions', icon: Blocks, variant: "ghost", disabled: false },
    ];

export const secondaryRoutes: Route[] = [
        { title: 'Notifications', icon: Bell, variant: "ghost", disabled: false },
        { title: 'Settings', icon: Settings, variant: "ghost", disabled: false },
        { title: 'Profile', icon: CircleUserRound, variant: "ghost", disabled: false },
    ];