import { useAuth } from "@/store/auth";
import { useAuthModal } from "@/store/modal";
import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "sonner";

const getCounter = async (url) => {
  const response = await axios.get(url);

  return response.data;
};

export function Header() {
  const discordCount = useQuery({
    queryKey: ["discordCounter"],
    queryFn: () =>
      getCounter(
        "https://discordapp.com/api/guilds/1219727953823268914/embed.json"
      ),
  });
  const serverCount = useQuery({
    queryKey: ["serverCounter"],
    queryFn: () => getCounter("https://api.minetools.eu/ping/mush.com.br/"),
  });
  const { userName } = useAuth((state) => state);
  const { setAuthModalOpen } = useAuthModal((state) => state);

  const handleAuthModalOpen = () => setAuthModalOpen(true);

  return (
    <>
      <header className="twisty-net-header">
        <div className="twisty-net-wrapper prioritate" id={41012}>
          {userName != null && (
            <div className="top-bar">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleAuthModalOpen();
                }}
                className="profile-avatar bottom-avatar mobile-hidden"
              >
                <div className="profile-description">
                  <p className="profile-title">{userName}</p>
                  <p className="profile-description-text">(Você)</p>
                </div>
                <div className="profile-head">
                  <img
                    className="avatar-logged"
                    src={`https://visage.surgeplay.com/head/512/${userName}.png`}
                    alt={`Cabeça de ${userName}`}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="twisty-net-header-g">
            <div
              className="widget minecraft-widget"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("ipServer").select(),
                  document.execCommand("copy");
                toast.success("IP Copiado com sucesso.");
              }}
            >
              <div className="widget-icon">
                <span className="player-count">
                  {serverCount.isLoading && <>Carregando...</>}
                  {!serverCount.isLoading &&
                    (serverCount.data.players.online ? (
                      serverCount.data.players.online
                    ) : (
                      <>0</>
                    ))}
                </span>
                <i className="mdi mdi-axe" />
              </div>
              <div className="description-widget">
                <p className="widget-title">twisty.network</p>
                <p className="widget-description">CLIQUE PARA COPIAR</p>
              </div>
            </div>
            <div className="header-logo">
              <a href="/">
                <img
                  src="/assets/img/twisty.PNG"
                  alt="server logo"
                  style={{ width: "24rem", marginBottom: "2rem" }}
                  animation-logo="pulse"
                  className="header-logo-image"
                />
              </a>
            </div>
            <a
              className="widget discord-widget"
              href="https://discord.gg/PvuFEtAxww"
              target="_blank"
            >
              <div className="description-widget">
                <p className="widget-title">Comunidade Discord</p>
                <p className="widget-description">Junte-se ao servidor</p>
              </div>
              <div className="widget-icon">
                <span id="discord-count">
                  {discordCount.isLoading ? (
                    <>Carregando..</>
                  ) : (
                    discordCount.data["presence_count"]
                  )}
                </span>
                <i className="mdi mdi-discord" />
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
