import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTimes, FaSearch, FaProjectDiagram } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Full Stack", "Mobile & WASM", "AI & Analytics"];
  const techPills = ["All", "React", "Node.js", "Capacitor", "WebSockets", "WebAssembly", "Python"];

  const filteredProjects = projects.filter((project) => {
    // 1. Category check
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    // 2. Tech pill check
    const matchesTech =
      activeTech === "All" ||
      project.tags.some((t) => t.toLowerCase().includes(activeTech.toLowerCase()));

    // 3. Search query check
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesTech && matchesSearch;
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setActiveTech("All");
    setSearchQuery("");
  };

  return (
    <section
      id="work"
      className="py-20 px-[6vw] md:px-[8vw] lg:px-[14vw] font-sans relative"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          FEATURED PROJECTS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Explore my production applications, WebAssembly tools, real-time architectures, and machine learning models.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="mb-12 space-y-4 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, keyword, or tech (e.g. Capacitor, WebSockets, WASM)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-gray-900/90 text-white placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-purple-500 text-xs sm:text-sm shadow-md transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.5)] scale-105"
                  : "bg-gray-900/80 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Tech Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          <span className="text-[11px] text-gray-400 font-semibold mr-1">Filter by Tech:</span>
          {techPills.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                activeTech === tech
                  ? "bg-purple-950 text-purple-300 border border-purple-600"
                  : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:text-gray-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
          <p className="text-gray-300 text-base mb-4">No projects match your current filter or search criteria.</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-lg shadow-purple-600/30"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border border-gray-800/90 bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(130,69,236,0.25)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Image Banner */}
                <div
                  onClick={() => handleOpenModal(project)}
                  className="relative overflow-hidden cursor-pointer aspect-video bg-[#0c091f]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-950/80 text-purple-300 border border-purple-800/60 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-black/75 text-emerald-300 border border-emerald-700/60 backdrop-blur-md">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Hover Details Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-purple-600/90 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                      View Details &amp; Highlights 🔍
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3
                    onClick={() => handleOpenModal(project)}
                    className="text-lg sm:text-xl font-bold text-white mb-2 cursor-pointer hover:text-purple-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        onClick={() => setActiveTech(tag)}
                        className="bg-purple-950/50 hover:bg-purple-900/60 cursor-pointer border border-purple-900/40 text-[11px] font-medium text-purple-300 rounded-md px-2 py-0.5 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-5 pb-5 pt-0 border-t border-gray-800/60 flex items-center gap-2 pt-3">
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition shadow-sm hover:shadow-purple-500/20"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt size={10} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold py-2 px-3 rounded-lg border border-gray-700 transition"
                >
                  <FaGithub size={12} />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => handleOpenModal(project)}
                  title="View Full Architecture Details"
                  className="p-2 text-gray-400 hover:text-purple-400 hover:bg-gray-800 rounded-lg border border-gray-700 transition"
                >
                  <span className="text-xs font-bold px-1">Info</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Redesigned Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#0f0c23] border border-purple-500/30 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#140f2e]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {selectedProject.statusBadge}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Preview Banner */}
              <div className="rounded-xl overflow-hidden border border-gray-800 aspect-video bg-[#0a071b]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Overview */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* System Architecture Flow */}
              {selectedProject.architecture && (
                <div className="bg-[#120d29] rounded-xl p-4 sm:p-5 border border-purple-800/40">
                  <h4 className="text-xs font-bold text-purple-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <FaProjectDiagram size={13} className="text-cyan-400" />
                    <span>System Architecture &amp; Data Pipeline</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Pipeline
                    </span>
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    {selectedProject.architecture.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="bg-gray-800/90 border border-gray-700 text-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
                          {step}
                        </span>
                        {idx < selectedProject.architecture.length - 1 && (
                          <span className="text-purple-400 font-bold text-sm">➔</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              {selectedProject.highlights && (
                <div className="bg-gray-900/90 rounded-xl p-4 sm:p-5 border border-gray-800">
                  <h4 className="text-sm font-bold text-purple-300 mb-3 uppercase tracking-wider">
                    Key Features &amp; Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                      >
                        <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={13} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-purple-300 rounded-lg px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="p-4 sm:p-5 border-t border-gray-800 bg-[#140f2e] flex flex-col sm:flex-row gap-3">
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-3 px-5 rounded-xl font-bold text-sm transition shadow-lg shadow-purple-600/30"
              >
                <span>Open Live Application</span>
                <FaExternalLinkAlt size={12} />
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-3 px-5 rounded-xl font-bold text-sm transition"
              >
                <FaGithub size={16} />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
