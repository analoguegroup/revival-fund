
import { useSEO } from "@/hooks/useSEO";

export default function Apply() {
  useSEO({
    title: "Apply for Funding",
    description: "Submit a quest to revive a dormant or forgotten scientific research path. Applications are open to both academic and independent scholars.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" data-testid="text-apply-title">
            AppLy
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-muted-foreground" data-testid="text-apply-placeholder">
              Application information and form will be added here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
