
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionAnimation from "../ui/SectionAnimation";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-light/10 to-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SectionAnimation animationType="right" className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              تعلم الرياضيات بطريقة سهلة وممتعة
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              مع الأستاذ دباح عبد اللطيف، خبير في تدريس الرياضيات لأكثر من 15 عامًا.
              نقدم محتوى تعليمي متميز يساعد الطلاب على فهم المفاهيم الرياضية وتطوير مهاراتهم.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/lessons">استكشف الدروس</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary-light/10">
                <Link to="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </SectionAnimation>
          
          <SectionAnimation animationType="left" className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-white shadow-lg rounded-lg p-6 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="استاذ الرياضيات" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary rounded-full opacity-50 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-30 z-0"></div>
            </div>
          </SectionAnimation>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
