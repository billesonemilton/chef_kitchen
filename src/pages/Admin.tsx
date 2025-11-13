import { useState } from "react";
import { Upload, Image as ImageIcon, Video, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  title: string;
  category: string;
  uploadDate: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: "1",
      type: "image",
      url: "/placeholder.svg",
      title: "Wedding Event 2023",
      category: "Weddings",
      uploadDate: "2023-11-01",
    },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    toast({
      title: "Upload Started",
      description: `Uploading ${files.length} file(s)...`,
    });

    // In a real application, you would upload to a server/cloud storage here
    // For now, we'll simulate the upload
    setTimeout(() => {
      toast({
        title: "Upload Complete",
        description: "Media files have been uploaded successfully!",
      });
    }, 2000);
  };

  const handleDelete = (id: string) => {
    setMediaItems(mediaItems.filter((item) => item.id !== id));
    toast({
      title: "Deleted",
      description: "Media item has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Media Management</h1>
            <p className="text-muted-foreground">
              Upload and manage your gallery images and videos
            </p>
          </div>

          <Tabs defaultValue="upload" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upload">Upload Media</TabsTrigger>
              <TabsTrigger value="manage">Manage Media</TabsTrigger>
            </TabsList>

            {/* Upload Tab */}
            <TabsContent value="upload">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Upload New Media</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="mediaTitle">Title</Label>
                    <Input
                      id="mediaTitle"
                      placeholder="e.g., Wedding Event 2023"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mediaCategory">Category</Label>
                    <Input
                      id="mediaCategory"
                      placeholder="e.g., Weddings, Corporate, Festivals"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="imageUpload">Upload Images</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-chef-gold transition-colors cursor-pointer">
                      <input
                        id="imageUpload"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="imageUpload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Click to upload images or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG, WEBP up to 10MB
                        </p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="videoUpload">Upload Videos</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-chef-gold transition-colors cursor-pointer">
                      <input
                        id="videoUpload"
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="videoUpload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Video className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Click to upload videos or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          MP4, MOV, AVI up to 100MB
                        </p>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-chef-brown hover:bg-chef-brown-dark">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Media
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* Manage Tab */}
            <TabsContent value="manage">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Media Library</h2>
                  <p className="text-muted-foreground">
                    {mediaItems.length} items
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediaItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative aspect-video bg-muted">
                        {item.type === "image" ? (
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.category} • {item.uploadDate}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {mediaItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No media items yet. Upload some to get started!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
