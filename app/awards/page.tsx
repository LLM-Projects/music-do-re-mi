"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecognitionList } from "@/components/awards-list";
import { recognitionsData, recognitionTypes, instruments } from "@/data/awards";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AwardsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [instrumentFilter, setInstrumentFilter] = useState("all");
  const [filteredRecognitions, setFilteredRecognitions] = useState(
    recognitionsData.recognitions
  );

  useEffect(() => {
    let filtered = recognitionsData.recognitions;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (recognition) =>
          recognition.student.toLowerCase().includes(query) ||
          recognition.teacher.toLowerCase().includes(query) ||
          recognition.award.toLowerCase().includes(query) ||
          recognition.description.toLowerCase().includes(query)
      );
    }

    // Apply type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter(
        (recognition) => recognition.type === typeFilter
      );
    }

    // Apply instrument filter
    if (instrumentFilter !== "all") {
      filtered = filtered.filter(
        (recognition) => recognition.instrument === instrumentFilter
      );
    }

    setFilteredRecognitions(filtered);
  }, [searchQuery, typeFilter, instrumentFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
              {recognitionsData.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {recognitionsData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container py-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div className="relative w-full md:w-auto flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recognitions..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="hidden md:flex gap-4">
              <div className="w-[180px]">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    {recognitionTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-[180px]">
                <Select
                  value={instrumentFilter}
                  onValueChange={setInstrumentFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by instrument" />
                  </SelectTrigger>
                  <SelectContent>
                    {instruments.map((instrument) => (
                      <SelectItem
                        key={instrument.value}
                        value={instrument.value}
                      >
                        {instrument.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden w-full sm:w-auto"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Filter recognitions by type and instrument
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="type-filter-mobile">Recognition Type</Label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger id="type-filter-mobile">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        {recognitionTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instrument-filter-mobile">Instrument</Label>
                    <Select
                      value={instrumentFilter}
                      onValueChange={setInstrumentFilter}
                    >
                      <SelectTrigger id="instrument-filter-mobile">
                        <SelectValue placeholder="Filter by instrument" />
                      </SelectTrigger>
                      <SelectContent>
                        {instruments.map((instrument) => (
                          <SelectItem
                            key={instrument.value}
                            value={instrument.value}
                          >
                            {instrument.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            {filteredRecognitions.length}{" "}
            {filteredRecognitions.length === 1 ? "Recognition" : "Recognitions"}
          </h2>

          {(typeFilter !== "all" ||
            instrumentFilter !== "all" ||
            searchQuery) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setTypeFilter("all");
                setInstrumentFilter("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      </section>

      {/* Recognitions List */}
      <section className="container pb-16">
        {filteredRecognitions.length > 0 ? (
          <RecognitionList recognitions={filteredRecognitions} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-foreground mb-2">
              No recognitions found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
