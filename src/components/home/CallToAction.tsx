
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionAnimation from "../ui/SectionAnimation";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <SectionAnimation>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ رحلة النجاح في الرياضيات اليوم</h2>
            <p className="text-lg mb-8 opacity-90">
              انضم إلى آلاف الطلاب الذين استفادوا من خبرة الأستاذ ديهم عبد اللطيف في تعليم الرياضيات وحققوا نتائج متميزة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/lessons">استكشف الدروس</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </SectionAnimation>
      </div>
    </section>
  );
};

export default CallToAction;
