import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/admin");
      }
    };
    checkUser();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/admin");
      } else {
        const redirectUrl = `${window.location.origin}/`;
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl
          }
        });
        if (error) throw error;
        
        toast({
          title: language === 'es' ? "Cuenta creada" : "Account created",
          description: language === 'es' 
            ? "Revisa tu email para confirmar tu cuenta"
            : "Check your email to confirm your account"
        });
      }
    } catch (error: any) {
      toast({
        title: language === 'es' ? "Error" : "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isLogin 
                ? (language === 'es' ? 'Iniciar Sesión' : 'Sign In')
                : (language === 'es' ? 'Crear Cuenta' : 'Create Account')
              }
            </CardTitle>
            <p className="text-muted-foreground">
              {language === 'es' ? 'Acceso para administradores' : 'Admin access only'}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <Label htmlFor="email">
                  {language === 'es' ? 'Correo electrónico' : 'Email'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">
                  {language === 'es' ? 'Contraseña' : 'Password'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading 
                  ? (language === 'es' ? 'Cargando...' : 'Loading...')
                  : isLogin 
                    ? (language === 'es' ? 'Iniciar Sesión' : 'Sign In')
                    : (language === 'es' ? 'Crear Cuenta' : 'Create Account')
                }
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin 
                  ? (language === 'es' ? '¿No tienes cuenta? Crear una' : "Don't have an account? Create one")
                  : (language === 'es' ? '¿Ya tienes cuenta? Iniciar sesión' : 'Already have an account? Sign in')
                }
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:underline"
              >
                ← {language === 'es' ? 'Volver al inicio' : 'Back to home'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
