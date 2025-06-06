"use client";

import Link from "next/link";
import * as React from "react";
import { Tabs } from "@ark-ui/react";
import { useTheme } from "next-themes";
import { twJoin } from "tailwind-merge";
import { Dialog, ScrollArea } from "radix-ui";

import * as Icons from "@/components/Icons";
import { Button } from "@/components/Button";
import { AppLogo } from "@/components/AppLogo";
import { Container } from "@/components/Container";
import { SITE_LINKS, SOCIAL_LINKS } from "@/lib/siteConfig";

//function debounce<T extends (...args: any[]) => void>(
//  func: T,
//  delay = 200
//): (...args: Parameters<T>) => void {
//  let timer: ReturnType<typeof setTimeout>;
//
//  return (...args: Parameters<T>) => {
//    clearTimeout(timer);
//    timer = setTimeout(() => func(...args), delay);
//  };
//}

function HeaderContent({ children }: { children?: React.ReactNode }) {
  const { setTheme } = useTheme();
  return (
    <Container className="py-2 flex items-center">
      <div className="flex-1 flex items-center">
        <AppLogo href="/" />
      </div>

      {children}

      <div className="inline-flex items-center gap-4">
        <Button
          size="sm"
          variant="inverted"
          className="hidden md:inline-flex rounded-full"
          asChild>
          <Link href="/request-demo">Request a demo</Link>
        </Button>

        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => {
            setTheme((t) => (t === "light" ? "dark" : "light"));
          }}>
          <Icons.LightModeIcon className="dark:hidden" />
          <Icons.DarkModeIcon className="hidden dark:inline" />
        </Button>

        <Dialog.Trigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="group rounded-full [&_svg]:size-6 lg:hidden">
            <Icons.MenuIcon className="inline group-aria-expanded:hidden" />
            <Icons.CloseIcon className="hidden group-aria-expanded:inline" />
          </Button>
        </Dialog.Trigger>
      </div>
    </Container>
  );
}

export const Navbar = () => {
  const { setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twJoin(
        "fixed inset-x-0 top-0 transition-[padding] z-10000",
        scrolled
          ? "max-md:border-b max-md:bg-background/85 max-md:backdrop-blur-sm py-2"
          : "py-4 lg:py-6"
      )}>
      <Container className="flex items-center">
        <div className="inline-flex items-center">
          <AppLogo
            href="/"
            classes={{ text: scrolled ? "text-foreground" : "text-white" }}
          />
        </div>

        <div className="ms-auto inline-flex items-center gap-4">
          <Tabs.Root
            value={activeLink}
            onValueChange={(ev) => {
              if (ev.value !== activeLink) setActiveLink(ev.value);
            }}>
            <Tabs.List asChild>
              <nav
                className={twJoin(
                  "hidden lg:flex items-center gap-1 relative overflow-hidden bg-background/85 backdrop-blur-sm border rounded-lg p-0.5"
                )}>
                <Tabs.Indicator className="bg-primary/15 rounded-lg h-(--height) w-(--width)" />
                {SITE_LINKS.navlinks.links.map((link) => (
                  <Tabs.Trigger
                    asChild
                    key={link.label}
                    value={link.href.replace("#/", "")}>
                    <Link
                      href={link.href}
                      className="px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground aria-selected:!text-primary transition-colors">
                      {link.label}
                    </Link>
                  </Tabs.Trigger>
                ))}
              </nav>
            </Tabs.List>
          </Tabs.Root>

          <div className="inline-flex items-center gap-4">
            <Button className="hidden md:inline-flex rounded-full" asChild>
              <Link href="/request-demo">Request a demo</Link>
            </Button>

            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setTheme((t) => (t === "light" ? "dark" : "light"));
              }}>
              <Icons.LightModeIcon className="dark:hidden" />
              <Icons.DarkModeIcon className="hidden dark:inline" />
            </Button>

            <Button
              variant="ghost"
              className="group rounded-full [&_svg]:size-6 lg:hidden">
              <Icons.MenuIcon className="inline group-aria-expanded:hidden" />
              <Icons.CloseIcon className="hidden group-aria-expanded:inline" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );

  return (
    <>
      <Dialog.Root>
        <header className="fixed top-0 inset-x-0">
          <HeaderContent>
            <Tabs.Root
              value={activeLink}
              onValueChange={(ev) => {
                if (ev.value !== activeLink) setActiveLink(ev.value);
              }}>
              <Tabs.List asChild>
                <nav className="hidden lg:flex items-center gap-1 me-4 relative overflow-hidden bg-background/90 backdrop-blur-md z-100 border-b">
                  <Tabs.Indicator className="bg-primary/15 rounded-lg h-(--height) w-(--width)" />
                  {SITE_LINKS.navlinks.links.map((link) => (
                    <Tabs.Trigger
                      asChild
                      key={link.label}
                      value={link.href.replace("#/", "")}>
                      <Link
                        href={link.href}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground aria-selected:!text-primary transition-colors">
                        {link.label}
                      </Link>
                    </Tabs.Trigger>
                  ))}
                </nav>
              </Tabs.List>
            </Tabs.Root>
          </HeaderContent>
        </header>

        <Dialog.Overlay className="max-h-full fixed inset-0 flex flex-col bg-background/90 backdrop-blur-md z-1000">
          <ScrollArea.Root asChild>
            <Dialog.Content className="flex-1 flex flex-col overflow-hidden">
              <div className="border-b border-foreground/20">
                <HeaderContent />
              </div>
              <div className="sr-only">
                <Dialog.Title>navbar</Dialog.Title>
                <Dialog.Description>navbar</Dialog.Description>
              </div>

              <ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <nav className="flex-1 flex flex-col overflow-hidden">
                  <Tabs.Root
                    asChild
                    value={activeLink}
                    orientation="vertical"
                    onValueChange={(ev) => {
                      if (ev.value !== activeLink) setActiveLink(ev.value);
                    }}>
                    <Container className="grid md:grid-cols-2 p-0 text-5xl font-medium tracking-tight relative">
                      <Tabs.Indicator className="w-(--width) h-(--height) bg-primary/15 z-10" />
                      <Tabs.List className="contents">
                        {SITE_LINKS.navlinks.links.map((link, idx) => (
                          <Tabs.Trigger
                            asChild
                            key={idx}
                            value={link.href.replace("#/", "")}>
                            <Dialog.Close asChild>
                              <Link
                                href={link.href}
                                className="group relative isolate px-6 py-10 sm:py-12 text-foreground md:even:ps-16">
                                {link.label}
                                <span className="absolute inset-y-0 -z-10  w-screen border-b border-foreground/20 transition md:group-odd:border-r group-odd:right-0 group-even:left-0 group-hover:bg-muted aria-selected:!text-primary" />
                              </Link>
                            </Dialog.Close>
                          </Tabs.Trigger>
                        ))}
                      </Tabs.List>
                    </Container>
                  </Tabs.Root>
                  <div className="py-2 border-t">
                    <Button
                      variant="inverted"
                      size="xl"
                      className="w-full"
                      asChild>
                      <Link href="/request-demo">Request a demo</Link>
                    </Button>
                  </div>
                  <div className="border-t">
                    <Container className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                      <div className="pl-2 sm:pl-6">
                        <h2 className="text-base font-semibold text-foreground">
                          Our offices
                        </h2>
                        <ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                          <li>
                            <address className="text-sm not-italic text-muted-foreground grid">
                              <strong className="text-foreground">USA</strong>
                              <span>1 Carlsberg Gate</span>
                              <span>1260, København, USA</span>
                            </address>
                          </li>

                          <li>
                            <address className="text-sm not-italic text-muted-foreground grid">
                              <strong className="text-foreground">Nepal</strong>
                              <span>1 Carlsberg Gate</span>
                              <span>1260, Kalimati, Kathmandu</span>
                            </address>
                          </li>
                        </ul>
                      </div>
                      <div className="pl-2 sm:pl-16">
                        <h2 className="text-base font-semibold text-foreground">
                          Follow us on
                        </h2>
                        {SOCIAL_LINKS.length > 0 && (
                          <ul className="flex gap-x-10 text-white mt-6">
                            {SOCIAL_LINKS.map((link, idx) => (
                              <li key={idx}>
                                <a
                                  target="_blank"
                                  href={link.href}
                                  title={`Follow us on ${link.label}`}
                                  className="transition text-muted-foreground hover:text-foreground [&_svg]:size-6">
                                  {link.icon}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Container>
                  </div>
                </nav>
              </ScrollArea.Viewport>
            </Dialog.Content>
          </ScrollArea.Root>
        </Dialog.Overlay>
      </Dialog.Root>
    </>
  );
};
