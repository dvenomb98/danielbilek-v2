"use client";

import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";
import { SunIcon, Laptop, MoonStarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./DropdownMenu";
import { Button } from "./Button";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonStarIcon,
  },
  {
    value: "system",
    label: "System",
    icon: Laptop,
  },
];


const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = themes.find((t) => t.value === theme);
  const ThemeIcon = currentTheme?.icon;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size={"icon"}>
              {!!ThemeIcon && <ThemeIcon className="w-4 h-4" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {themes.map(({ value, label, icon }) => {
              const Icon = icon;

              return (
                <DropdownMenuItem
                  isActive={currentTheme?.value === value}
                  role="button"
                  onClick={() => setTheme(value)}
                  key={value}
                >
                  <div className="flex w-fit gap-1 items-center">
                    <Icon className="w-4 h-4" />
                    {label}
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  );
};

export default ThemeSwitcher;
